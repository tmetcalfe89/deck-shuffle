const path = require("path");
const express = require("express");
const routes = require("./routes");

const { PORT = 3000 } = process.env;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(routes);

app.listen(PORT, () => {
  console.log(`API listening on port ${PORT}`);
});
