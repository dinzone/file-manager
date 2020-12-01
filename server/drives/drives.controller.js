const { getAllDrives } = require("./drives.service");
module.exports.getDrives = (req, res, next) => {
  try {
    getAllDrives().then(data => res.json(data));
  } catch (err) {
    console.log(err);
    res.status(400).send("couldn't find drives");
  }
};

