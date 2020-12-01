const { Router } = require("express");
const drivesRouter = Router();
const { getDrives } = require("./drives.controller");

drivesRouter.get("/", getDrives);

module.exports = drivesRouter;
