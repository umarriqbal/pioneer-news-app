const searchNewsValidator = require("../../validators/searchNews");
const { getNews } = require("../../modules/api/news");

const searchNewsController = async (req, res) => {
  const { value, error } = searchNewsValidator(req.query);

  if (error) {
    return res.status(400).send({ error: error.details[0].message });
  }

  const news = await getNews(value.query, value.page);
  if (news) {
    return res.status(200).send(news);
  } else {
    return res.status(404).send({ error: "No news found." });
  }
};

module.exports = searchNewsController;
