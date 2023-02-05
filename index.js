const express = require("express");
const app = express();
const { connectMongoose, User } = require("./database.js");
const passport = require("passport-oauth2");
connectMongoose();
startPassport(passport);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("hello");
});

app.post("/login", (req, res) => {
  const user = await.findOne({ username: req.body.username });
  if (user) return res.status(400).send("logged in successfully");
});

app.listen(3000, () => {
  console.log("Serve is up and running at the port 3000");
});
