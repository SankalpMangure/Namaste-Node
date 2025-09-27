const validate = require("validator")
const validateData = (req) => {
  const { firstName, lastName, emailId, password } = req.body

  if (!firstName || !lastName) {
    throw new Error("Firstname or lastname is not valid")
  } else if (!validate.isEmail(emailId)) {
    throw new Error("Email is not valid")
  } else if (!validate.isStrongPassword(password)) {
    throw new Error("Password is not strong")
  }
}

module.exports = { validateData }