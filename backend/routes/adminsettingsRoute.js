const express = require("express");
const {
    createWebsite_Basic_Details,
} = require("../controller/adminsettingsController.js");

const router2 = express.Router();

router2.post("/adminsettings", createWebsite_Basic_Details);
module.exports= { router2 }
