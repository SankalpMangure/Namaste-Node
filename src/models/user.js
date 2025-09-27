const mongoose = require('mongoose')
const validator = require("validator")

// const useSchema = mongoose.Schema({
const userSchema = new mongoose.Schema({
  // const useSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    minLength: 4,
    maxLength: 50
  },
  lastName: {
    type: String,
  },
  emailId: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email id is not valid")
      }
    }
  },
  password: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    min: 18
  },
  gender: {
    type: String,
    // custom validation function => only runs for new entry
    // for apply this validation method on update add runValidators param to that method
    validate(value) {
      if (!["male", "female", "others"].includes(value)) {
        throw new Error("Gender is nit valid")
      }
    }
  },
  photoUrl: {
    type: String,
  },
  about: {
    type: String,
    default: "This is a default description of user!"
  },
  skills: {
    type: [String],
    validate(value) {
      if (value.length > 2) {
        throw new Error("only 2 skills are allowed")
      }
    }
  }
},
  { timestamps: true } // it will automatically add createdAt and updatedAt
)

const User = mongoose.model("User", userSchema)
// 1st param => model
// 2nd param => structure of model/schema
// 3rd param => (optional), exact name of the model u want
module.exports = { User }
// module.exports = mongoose.model("User".useSchema)