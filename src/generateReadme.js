const path = require("path");
const fs = require("fs");

function generateReadme() {
  const artTemplate = require("art-template");
  const dayjs = require("dayjs");

  const me = require("./me.js");

  const resolve = (filePath = ".") => path.resolve(__dirname, filePath);

  const html = artTemplate(resolve("./readme.art"), {
    day: dayjs().format("YYYY 年 M 月 D 日"),
    ...me,
  });

  fs.writeFileSync(resolve("../README.md"), html);
}

module.exports = generateReadme;