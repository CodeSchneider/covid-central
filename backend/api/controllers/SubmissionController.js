const { buildYup } = require("schema-to-yup");
const Joi = require('joi');

module.exports = {
  new: async function(req,res) {
    try {
      const surveySlug = req.param('surveySlug');
      const {
        submissionSchema : schema,
        scores
      } = await Survey.findOne({ slug: surveySlug });

      //validate survey submission...
      const yupSchema = buildYup(schema, {});

      const validatedBody = await yupSchema.validate(req.body);
      //score the survey submission
      console.log('validatedBody: ',validatedBody);
      const score = await sails.helpers.score(validatedBody);
      //save the survey submission...todo...
      return res.send({
        next: scores[score]
      });
    } catch(e) {
      return res.badRequest({
        message: e.message || 'Problem with submission.'
      });
    }
  }
}
