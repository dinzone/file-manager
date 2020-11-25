const { Router } = require("express");
const filesRouter = Router();
const { getFiles } = require("./files.controller");

filesRouter.get("/", getFiles);

module.exports = filesRouter;
