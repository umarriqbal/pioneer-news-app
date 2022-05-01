const axios = require("axios").default;
const moment = require("moment");
const apiKeyParam = `&apiKey=${process.env.NEWS_API_KEY}`;

const getHeadlines = async (page) => {
  try {
    var apiUrl = `https://newsapi.org/v2/top-headlines?pageSize=5&country=us${apiKeyParam}`;
    if (page) {
      apiUrl = `${apiUrl}&page=${page}`;
    }
    const response = await axios.get(apiUrl);
    if (response?.status === 200 && response?.data?.status === "ok") {
      const responseData = response.data;
      return {
        totalPages: Math.ceil(responseData.totalResults / 5),
        articles: responseData.articles,
      };
    }
  } catch (error) {
    console.error(error);
  }
  return {};
};

const getNews = async (query, page) => {
  try {
    const currentDate = moment().subtract(1, "weeks").format("YYYY-MM-DD");
    var apiUrl = `https://newsapi.org/v2/everything?sortBy=publishedAt&pageSize=5&from=${currentDate}${apiKeyParam}`;
    if (page) {
      apiUrl = `${apiUrl}&page=${page}`;
    }
    if (query) {
      apiUrl = `${apiUrl}&q=${query}`;
    }
    const response = await axios.get(apiUrl);
    if (response?.status === 200 && response?.data?.status === "ok") {
      const responseData = response.data;
      const pages = Math.ceil(responseData.totalResults / 5);
      return {
        totalPages: pages > 10 ? 10 : pages,
        articles: responseData.articles,
      };
    }
  } catch (error) {
    console.error(error);
  }
  return {};
};

module.exports.getHeadlines = getHeadlines;
module.exports.getNews = getNews;
