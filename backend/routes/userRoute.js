const express = require("express");
const {
    getAllEmployee,
} = require("../controller/userController");

const router = express.Router();

router.get("/users", getAllEmployee);

module.exports= { router }