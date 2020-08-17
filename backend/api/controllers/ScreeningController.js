const moment = require('moment');
const MongoClient = require('mongodb').MongoClient;
const mongoConn =  process.env.MONGO_CONN || sails.config.mongoConn;
const dbName = process.env.MONGO_DATABASE || sails.config.mongoDbName;

module.exports = {
  new: async function(req,res) {
    try {
      const validatedSubmission = await sails.helpers.screeningValidate(req.body);
      const score = await sails.helpers.screeningScore(validatedSubmission);
      const time = new Date();
      const screening = {
        ...validatedSubmission,
        ...score,
        createdAt: time.toISOString()
      };
      // FIX this local/prod connection issue...
      const mongoUrl = 'mongodb://test:test@my-release-mongodb:27017/test';
      const dbName = 'test';
      const client = await MongoClient.connect(mongoUrl, {});
      const db = await client.db(dbName);
      await db.collection('screening.raw').insertOne(screening);
      await client.close();
      req.session.last_successful_submission = moment();
      return res.ok();
    } catch(e) {
      console.log('error: ',e);
      return res.badRequest({
        message: e.message || 'Problem with submission.'
      });
    }
  }
}
