
const express = require("express");
const {
    createfreelancerProfileHandler
} = require("../controller/freelancerprofileController.js");

const router3 = express.Router();

router3.post("/freelancerprofile", createfreelancerProfileHandler);

module.exports= { router3 }