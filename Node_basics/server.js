const http = require("http")
const server = http.createServer(function (req, res) {
  if (req.url === "/getSecretData") {
    res.end("this is secret data")
  }
  res.end("hello world !")
});
// it will give instance on server 
server.listen(7777)