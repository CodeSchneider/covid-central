const Joi = require('joi');

const schema = Joi.object().keys({
  question1: Joi.boolean().strict().required(),
  question2: Joi.boolean().strict().required(),
  question3: Joi.boolean().strict().required(),
  question4: Joi.boolean().strict().required(),
  question5: Joi.boolean().strict().required(),
  question6: Joi.boolean().strict().required(),
  question7: Joi.boolean().strict().required(),
  question8: Joi.boolean().strict().required(),
  question9: Joi.boolean().strict().required(),
  question10: Joi.boolean().strict().required(),
  question11: Joi.boolean().strict().required(),
  question12: Joi.boolean().strict().required(),
  question13: Joi.boolean().strict().required(),
});

export default schema;
