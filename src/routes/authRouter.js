const express = require('express')

const { User } = require("../models/user")
const { validateData } = require("../utils/validation")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const authRouter = express.Router()

authRouter.post("/signup", async (req, res) => {
  const { firstName, lastName, emailId, password } = req.body
  try {
    validateData(req)

    const passHash = await bcrypt.hash(password, 10)
    // creating a new instance of user model
    // const user = new User(userData);
    const user = new User({
      firstName, lastName, emailId, password: passHash
    });
    await user.save();
    res.send("user added successfully")
  } catch (error) {
    res.status(400).send("error when adding the user" + error)
  }
})

authRouter.post('/login', async (req, res) => {
  const { emailId, password } = req.body
  try {
    // writing login logic
    const userCheck = await User.findOne({ emailId: emailId })

    if (!userCheck) {
      throw new Error("User not present with this email id")
    }

    // pass original and then encrypted from DB it will automatically compare using below inbuilt function
    const isPassword = await bcrypt.compare(password, userCheck.password)
    if (isPassword) {
      const token = await jwt.sign({ _id: userCheck._id }, "DEV@TINDER@123")
      // console.log(en);
      res.cookie("token", token)
      res.send("Login Success")
    } else {
      throw new Error("Incorrect Password")
    }
    // writing login logic
  } catch (error) {
    res.status(400).send("ERROR :-" + error.message)
  }
})

module.exports = { authRouter }