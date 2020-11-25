const { getAllFiles } = require("./files.service");
module.exports.getFiles = async (req, res, next) => {
  try {
    const path = req.query && req.query.path ? req.query.path : null;
    res.json(await getAllFiles(path));
  } catch (err) {
    console.log(err);
    res.status(500).send("couldn't find files");
  }
};

