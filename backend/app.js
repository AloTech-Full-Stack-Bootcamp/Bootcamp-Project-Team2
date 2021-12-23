require("dotenv").config();//let's us to hide pool informations.
const express = require("express")
const userRouter = require("./api/users/userRouter")

const app = express() //initialize the express application..

//middlewares
app.use(express.json())

app.use("/users", userRouter)

// set the port and listen to the server through it.
// const PORT = process.env.PORT || 3000

app.listen(process.env.PORT, () => {
    console.log(`Server is working on port: ${process.env.APP_PORT}`);
})
 