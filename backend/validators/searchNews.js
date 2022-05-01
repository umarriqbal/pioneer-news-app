const Joi = require("joi");

const searchNewsValidator = (data) => {
  const searchNewsSchema = Joi.object({
    query: Joi.string().required(),
    page: Joi.number(),
  });
  return searchNewsSchema.validate(data);
};

module.exports = searchNewsValidator;
