const express = require("express");
const app = express();

app.use(express.static("./dist/sitio-videos"));

app.get("/*", (req, res) =>
  res.sendFile("index.html", { root: "dist/sitio-videos/" })
);

app.listen(process.env.PORT || 8080);
