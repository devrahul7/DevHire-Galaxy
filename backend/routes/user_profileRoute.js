
const express = require("express");
const {
    createProfile
} = require("../controller/user_profileController.js");

const router6 = express.Router();

router6.post("/user_profile", createProfile);

module.exports= { router6 }