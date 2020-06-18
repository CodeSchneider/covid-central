const Joi = require('joi');

module.exports = {
  new: async function(req,res) {
    try {
      const schema = Joi.object().keys({
        slug: Joi.string().required(),
        instructions: Joi.string().required(),
        navExtra: Joi.string(),
        content: Joi.object().keys({
          byId: Joi.object().required(),
          allIds: Joi.array().required()
        }).required(),
        submissionSchema: Joi.object().required(),
        scores: Joi.object().required()
      });
      const validatedBody = await Joi.validate(req.body, schema, {
        stripUnknown: true
      });
      await Survey.create(validatedBody);
      return res.ok();
    } catch(e) {
      return res.badRequest({
        message: e.message || 'Problem with creating survey.'
      });
    }
  },
  view: async function(req,res) {
    try {
      const surveySlug = req.param('surveySlug');
      const {
        slug,
        content,
        submissionSchema,
        instructions,
        navExtra
      } = await Survey.findOne({ slug: surveySlug });
      return res.send({
        slug,
        content,
        submissionSchema,
        instructions,
        navExtra
      });
    } catch(e) {
      return res.badRequest({
        message: e.message || 'Problem fetching survey.'
      });
    }
  }
}
