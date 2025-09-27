const mongoose = require('mongoose')

const connection = async () => {
  // await mongoose.connect('mongodb+srv://SankalpMangure:Sankalp%4010@cluster0.k2upamx.mongodb.net/')
  await mongoose.connect('mongodb+srv://SankalpMangure:Sankalp%4010@cluster0.k2upamx.mongodb.net/devTinder?retryWrites=true&w=majority&appName=Cluster0&tls=true&family=4')
}

module.exports = { connection }
// connection().then(() => {
//   console.log("DB coonection success");
// }).catch((error) => {
//   console.log("DB coonection error", error);
// })




