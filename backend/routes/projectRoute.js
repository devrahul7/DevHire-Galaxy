
const express = require("express");
const {
    createProject
} = require("../controller/createProject");

const router1 = express.Router();

router1.get("/project", createProject);

module.exports= { router1 }