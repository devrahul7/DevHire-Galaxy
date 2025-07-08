
const express = require("express");
const {
    createReviews
} = require("../controller/reviews");

const router4 = express.Router();

router4.post("/project", createReviews);

module.exports= { router4 }
 