const router = require("express").Router();
const headlinesController = require("../controllers/news/headlines");
const searchNewsController = require("../controllers/news/searchNews");

router.get("/", searchNewsController);
router.get("/headlines", headlinesController);

module.exports = router;
