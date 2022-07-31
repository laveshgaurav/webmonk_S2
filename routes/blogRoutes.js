const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const blogModel = require("../models/blogModel");
const userModel = require("../models/userModel");

router.post("/new-blog", async (req, res) => {
  try {
    let existingUser = await userModel.find({ _id: req.body.user });
    if (existingUser.length === 0) {
      return res.send({
        message: "User does not exist",
      });
    }
    let newBlog = await blogModel(req.body);
    let response = await newBlog.save();
    return res.send({
      message: "Blog created successfully",
      response,
    });
  } catch (e) {
    return res.send({
      message: e.message,
    });
  }
});

router.patch("/update-blog", async (req, res) => {
  try {
    let existingUser = await userModel.find({ _id: req.body.userId });
    if (existingUser.length === 0) {
      return res.send({
        message: "User does not exist",
      });
    }
    let response = await blogModel.findOneAndUpdate(
      { _id: req.body.blogId },
      { $set: req.body },
      { new: true }
    );
    return res.send({
      message: "Blog updated successfully",
    });
  } catch (error) {
    return res.send({
      message: error.message,
    });
  }
});

module.exports = router;
