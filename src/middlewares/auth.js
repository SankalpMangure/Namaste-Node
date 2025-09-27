const jwt = require("jsonwebtoken")
const { User } = require("../models/user")

const userAuth = async (req, res, next) => {
  try {

    const cookies = req.cookies
    const { token } = cookies
    const decodedmsg = await jwt.verify(token, "DEV@TINDER@123")
    const _id = decodedmsg
    const user = await User.findById(_id)
    if (!user) {
      throw new Error("USer is not valid")
    }
    req.user = user
    next()
  } catch (error) {
    res.status(400).send("ERROR" + error.message)
  }
}

module.exports = {
  userAuth
}