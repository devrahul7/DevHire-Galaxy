const express = require("express");
const {
    showtransition
} = require("../controller/transationController.js");

const router5 = express.Router();

router5.post("/project", showtransition);

module.exports= { router5 }