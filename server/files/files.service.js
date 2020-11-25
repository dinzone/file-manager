const fse = require("fs-extra");
const path = require("path");

module.exports.getAllFiles = async (route) => {
  await fse.readdir(route,
    (err, files) => {
      files.forEach((file) => {
      });
    });
};
