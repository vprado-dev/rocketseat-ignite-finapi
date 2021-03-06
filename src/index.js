const express = require("express");
const { readdirSync } = require("fs");
const { join } = require("path");
const { json } = require("body-parser");
const { notFound, exception } = require("@ev-fns/errors");

const app = express();

app.use(json());

const routes = readdirSync(join(__dirname, "routes"));

for (const route of routes) {
  app.use(require(join(__dirname, "routes", route)));
}

app.use(notFound);
app.use(exception);

const PORT = 8000;

app.listen(PORT, () => {
  console.info(`Listening at http://localhost:${PORT}/`);
});
