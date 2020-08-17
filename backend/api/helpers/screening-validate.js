const Joi = require('joi');

module.exports = {
  friendlyName: 'Validate screening submission',
  description: 'Validate screening submission',
  inputs: {
    submission: {
      type: 'ref',
      example: {
        consent: null,
        any_symptoms: '',
        exposure: '',
        symptoms_list: [],
        any_life_threaten: '',
        groups: []
      },
      required: true
    }
  },
  fn: async function (inputs, exits) {
    try {
      const { submission } = inputs;
      const schema = Joi.object({
        consent: Joi.boolean().allow('', null),
        any_symptoms: Joi.string().valid(["yes", "no"]).allow('', null),
        exposure: Joi.string().valid(["yes", "no"]).allow('', null),
        symptoms_list: Joi.array(),
        any_life_threaten: Joi.string().valid(["yes", "no"]).allow('', null),
        groups: Joi.array()
      });
      const validatedSubmission = await schema.validate(submission, { stripUnknown: true });
      return exits.success(validatedSubmission);
    } catch(e) {
      return exits.error(e);
    }
  }
};
