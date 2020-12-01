const fse = require("fs-extra");
const path = require("path");

module.exports.getAllFiles = async (route) => {
  const files = await fse.readdir(route);
  return await files.map(file => ({
      name: file,
      extName: path.extname(file)
    })
  )
};
