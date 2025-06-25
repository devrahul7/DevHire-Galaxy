const express = require("express");
const {connection} = require("./database/db");
const {login, register, getUserById, forgetPassword, resetPassword , adminlogin, adminregister} = require("./controller/userController");

const app = express();
const PORT = 5000;

connection()
app.use(express.json());
app.post("/register", register)
app.get("/user/:id", getUserById)
app.post("/login",login)
app.post("/forgetPassword",forgetPassword);
app.post("/resetPassword",resetPassword);
app.post("/adminlogin",adminlogin)
app.post("/adminregister",adminregister)


app.listen(PORT, () => {
  console.log(`Server ruuning port ${PORT}`);
});
