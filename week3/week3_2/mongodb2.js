const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const jwtPassword = "123456";
const app = express();
const port = 3000;
app.use(express.json());

mongoose.connect("mongodb+srv://ernestprashant:VNa70rlRt6H5zL9T@cluster0.dtfr1w6.mongodb.net/test")

const User = mongoose.model("Users", {
  name: String,
  email: String,
  password: String,
});
app.post("/signup", async function (req, res) {
  const username = req.body.username;
  const password = req.body.password;
  const name = req.body.name;

  const existingUser = await User.findOne({ email: username });
  // CRUD=> create, update, delete, Read
  if (existingUser) {
    return res.status(400).send("Username already exists");
  }

//   await User.create({name,email:username, password}) or below lines
  const user = new User({
    name: name,
    email: username,
    password: password,
  });

  user.save();
  res.json({
    msg: "User created successfully",
  });
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    // return a list of users other than this username from the database
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(port, () => {
    console.log(`server running on port ${port}`);
})