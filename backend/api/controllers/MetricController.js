const MongoClient = require('mongodb').MongoClient;

module.exports = {
  last: async function(req,res) {
    try {
      const mongoUrl = 'mongodb://test:test@my-release-mongodb:27017/test';
      const dbName = 'test';
      const client = await MongoClient.connect(mongoUrl, {});
      const db = await client.db(dbName);
      const record = await db.collection('scrape.processed').find(
        {},
        {
          '_id': 0,
          'lastUpdated': 1,
          'newReportsToday': 1,
          'totalReported': 1,
          'timeseries': 1,
          'reports': 1
        }
      ).sort({'createdAt': -1}).limit(1).toArray();
      await client.close();
      return res.send(record[0]);
    } catch (e) {
      return res.badRequest({
        message: e.message || 'Problem retrieving metrics.'
      });
    }
  }
}
