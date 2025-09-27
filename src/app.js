const express = require("express")
const app = express()
const { userCheck } = require('./middlewares/tempMiddleware')
const { connection } = require('./config/database')
const { User } = require("./models/user")
const { validateData } = require("./utils/validation")
const bcrypt = require("bcrypt")
const GoogleGenerativeAI = require("@google/generative-ai")
const cookieParser = require('cookie-parser')
const jwt = require("jsonwebtoken")
const { userAuth } = require("./middlewares/auth")

const { authRouter } = require("./routes/authRouter")


// request handler
// app.use((req, res) => {
//   res.send("Hello from the server")
// })
// request handler

// /use?r => it shows the e is optional, if not give also works
// /u(se)?r => it shows the se is optional, if not give also works
// /use+r => it shows the many time eeee will work, like useeeeer
// /u(se)+r => it shows the many time sesese will work like useseseseser
// /us*er => ianything between us & er will work like usSANKALPer
// /us*er => it shows the many time sesese will work like useseseseser

// calling from postman like this 
// '/user?uid=101' => console.log(req.query);
// '/user/101' => console.log(req.params);
// calling from postman like this 

// app.get('/user', (req, res) => {
//   res.send("this is get method")
// })
// app.post('/user', (req, res) => {
//   res.send("this is get method")
// })
// request handler


// app.use("/route", routeHandler1, routeHandler2, routeHandler3, routeHandler4)

// app.use((req, res) => {
//   res.send("this is route handler")
// })

// middleware test
// app.get("/getUserDetails", userCheck, (req, res) => {
//   res.status(200).send("middleware success")
// })
// middleware test

// calling middleware coz i want to use it for all API's
app.use(express.json());
app.use(cookieParser())
// calling middleware coz i want to use it for all API's

app.use("/", authRouter)

// app.post("/signup", async (req, res) => {
//   const { firstName, lastName, emailId, password } = req.body
//   try {
//     validateData(req)

//     const passHash = await bcrypt.hash(password, 10)
//     // creating a new instance of user model
//     // const user = new User(userData);
//     const user = new User({
//       firstName, lastName, emailId, password: passHash
//     });
//     await user.save();
//     res.send("user added successfully")
//   } catch (error) {
//     res.status(400).send("error when adding the user" + error)
//   }
// })

// app.post('/login', async (req, res) => {
//   const { emailId, password } = req.body
//   try {
//     // writing login logic
//     const userCheck = await User.findOne({ emailId: emailId })

//     if (!userCheck) {
//       throw new Error("User not present with this email id")
//     }

//     // pass original and then encrypted from DB it will automatically compare using below inbuilt function
//     const isPassword = await bcrypt.compare(password, userCheck.password)
//     if (isPassword) {
//       const token = await jwt.sign({ _id: userCheck._id }, "DEV@TINDER@123")
//       // console.log(en);
//       res.cookie("token", token)
//       res.send("Login Success")
//     } else {
//       throw new Error("Incorrect Password")
//     }
//     // writing login logic
//   } catch (error) {
//     res.status(400).send("ERROR :-" + error.message)
//   }
// })

app.get('/user', async (req, res) => {
  try {
    const email = req.body.emailId;

    // if you have multiple records same email id then it will give all users
    // const user = await User.find({ emailId: email })
    // if (user.legth > 0) {

    // if you have multiple records with same email id then it will give 1st one added user
    const user = await User.findOne({ emailId: email })
    if (user) {
      res.send(user)
    } else {
      res.send("user not found")
    }
  } catch (err) {
    res.status(400).send("somjething went wrong")
  }
})

app.get('/feed', async (req, res) => {
  try {
    const userCheck = await User.find()
    res.send(userCheck);
    res.send({ 'data': dada })
  } catch (err) {
    res.status(400).send("Something went wrong" + err.message)
  }
})

app.delete("/user", async (req, res) => {
  const userId = req.body.userId

  const check = await User.findByIdAndDelete(userId)
  res.send(check)
})

app.patch('/user/:userId', async (req, res) => {
  const userId = req.params.userId
  const data = req.body

  try {
    // const ALLOWED_FIELDS = ["firstName", "lastName", "userId"] // i was passing userId from body
    const ALLOWED_FIELDS = ["firstName", "lastName"]

    const isUpdateAllowed = Object.keys(data).every((k) => {
      ALLOWED_FIELDS.includes(k)
    })

    if (!isUpdateAllowed) {
      throw new Error("some fileds are not allowed to update like email")
    }
    // if field is not present in schema then it will not update, like here us is not in schema so it will not add or update userId into object
    // custom validation function => only runs for new entry
    // for apply this validation method on update add runValidators param to that method
    const update = await User.findByIdAndUpdate({ _id: userId }, data, { returnDocument: "after", runValidators: true })
    // { returnDocument: "before" } => give data which is before update => by default
    // { returnDocument: "before" } => give data which is after update
    res.send(update);

    // const update = await User.findOneAndUpdate()

  } catch (error) {
    res.status(400).send("Something went wrong" + error.message)
  }
})

app.put('/user', async (req, res) => {
  const userId = req.body.userId
  const dataPut = req.body
  try {

    const { GoogleGenerativeAI } = await import("@google/generative-ai");
    const genAI = new GoogleGenerativeAI("AIzaSyDOqKkPNURI2N0NTr3MktUoLHrBXDGtcts");
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContent("Explain MERN stack");
    res.send(result.response.text());

    // findOneAndReplace will replace your all documents like u must send (filter, data, options) => filter is like PROPER WHERE CONDITION
    // const updated = await User.findOneAndReplace({ _id: userId }, dataPut)
    // res.send(updated)

  } catch (error) {
    res.status(400).send("something went wrong" + error.message)
  }
})

app.get('/profile', userAuth, async (req, res) => {
  try {
    // logic before auth middlewar
    // if (!token) {
    //   throw new Error("Invalid Token")
    // }
    // const decodedmsg = await jwt.verify(token, "DEV@TINDER@123")

    // const { _id } = decodedmsg
    // const user = await User.findById(_id)
    // if (!user) {
    //   throw new Error("USer is not valid")
    // }
    // res.send(user)
    // logic before auth middlewar

    const user = req.user // i have added user data in request into middleware
    res.send(user)
  } catch (error) {
    res.status(400).send("ERROR :-" + error.message)
  }
})

// this is logic behind like 1st need to connect to DB and after that listing on port 
connection().then(() => {
  console.log("DB coonection success");
  app.listen(7777, () => {
    console.log("server running on port 7777K");
  })
}).catch((error) => {
  console.log("DB coonection error", error);
})
// this is logic behind like 1st need to connect to DB and after that listing on port

// this is the only server listing port
// app.listen(8000, () => {
//   console.log("server running on port 80K");
// })
// this is the only server listing port