const express = require("express");
const {connection} = require("./database/db");
const {login, register, getUserById } = require("./controller/userController");

const app = express();
const PORT = 5000;

connection()
app.use(express.json());
app.post("/register", register)
app.get("/user/:id", getUserById)
app.post("/login",login)

app.listen(PORT, () => {
  console.log(`Server ruuning port ${PORT}`);
});
