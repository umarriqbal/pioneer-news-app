const headlinesValidator = require("../../validators/headlines");
const { getHeadlines } = require("../../modules/api/news");

const headlinesController = async (req, res) => {
  const { value, error } = headlinesValidator(req.query);

  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  const headlines = await getHeadlines(value.page);
  return res.status(200).send(headlines);
};

module.exports = headlinesController;
