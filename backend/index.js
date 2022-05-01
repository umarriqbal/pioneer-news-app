require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const corsOptions = require("./config/corsOptions");
var serveStatic = require("serve-static");
const PORT = process.env.PORT || 3500;

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// routes
const newsRouter = require("./routes/news");

// route middlewares.
app.use("/api/news", newsRouter);

app.all("/api/*", (req, res) => {
  res.status(404);
  if (req.accepts("html")) {
    res.send("<h1>404 Not Found</h1>");
  } else if (req.accepts("json")) {
    res.json({ error: "404 Not Found" });
  } else {
    res.type("txt").send("404 Not Found");
  }
});

const dirPath = __dirname + "/../frontend/dist";
app.use(serveStatic(dirPath));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
