const express = require("express")
const { log } = require("node:console")
const app = express()

// request handler
// request handler
app.use((req, res) => {
  res.send("Hello from the server")
})
// request handler

app.listen(8000, () => {
  console.log("server running on port 80K");
  console.log("sasklhasjj");

})