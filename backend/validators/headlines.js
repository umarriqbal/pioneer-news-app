const Joi = require("joi");

const headlinesValidator = (data) => {
  const headlinesSchema = Joi.object({
    page: Joi.number(),
  });
  return headlinesSchema.validate(data);
};

module.exports = headlinesValidator;
