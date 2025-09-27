const userCheck = (req, res, next) => {
  console.log("Hopelesss user");
  // res.status(200).send("Hopeless user");
  next();
}

module.exports = { userCheck }