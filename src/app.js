const express = require("express");
const { readdirSync } = require("fs");
const { join } = require("path");

const app = express();

const routes = readdirSync(join(__dirname, "routes"));

for (const route of routes) {
  app.use(require(join(__dirname, "routes", route)).default);
}

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}/`);
});
