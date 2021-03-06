const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const filesRouter = require("./files/files.router");
const drivesRouter = require("./drives/drives.router");

const setHeaders = (req, res, next) => {
  res.removeHeader("X-Powered-By");
  next();
};

const logger = (req, res, next) => {
  console.log(req.method, req.path);
  next();
};

app.use(bodyParser.json());
app.use(logger);
app.use(setHeaders);

app.use("/api/files", filesRouter);
app.use("/api/drives", drivesRouter);

app.listen(3000, () => {
  console.log("app listen on port 3000");
});
