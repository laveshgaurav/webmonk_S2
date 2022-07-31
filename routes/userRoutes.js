const express = require("express");
const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const blogModel = require("../models/blogModel");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    let users = await userModel.find();
    return res.send({
      users,
    });
  } catch (e) {
    console.log(e);
  }
});

router.post("/sign-up", async (req, res) => {
  try {
    let existingUser = await userModel.findOne({ email: req.body.email });
    if (existingUser) {
      return res.send({
        message: "User already exists",
      });
    }
    const newUser = new userModel(req.body);
    const hash = bcrypt.hashSync(req.body.password, 10);
    newUser.password = hash;
    const response = await newUser.save();
    console.log(response);
    return res.send({
      message: "Sign up successful",
      response,
    });
  } catch (e) {
    return res.send({
      message: e.message,
    });
  }
});

router.post("/sign-in", async (req, res) => {
  try {
    let existingUser = await userModel.findOne({ email: req.body.email });
    if (!existingUser) {
      return res.send({
        message: "User does not exist",
      });
    }
    let isValid = bcrypt.compareSync(req.body.password, existingUser.password);
    if (!isValid) {
      return res.send({
        message: "Invalid password",
      });
    } else {
      return res.send({
        message: "Sign in successful",
        existingUser,
      });
    }
  } catch (e) {
    return res.send({
      message: e.message,
    });
  }
});

router.post("/get-blogs", async (req, res) => {
  try {
    let blogs = await blogModel.find({ user: req.body.id });
    return res.send({
      blogs,
    });
  } catch (e) {
    return res.send({
      message: e.message,
    });
  }
});

module.exports = router;
