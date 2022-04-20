const express = require("express")
const app = express()
const mainRouter = require("./Route/mainRouter")
const cors = require("cors");
const session = require('express-session')
require("dotenv").config()

const mongoose = require("mongoose")
mongoose.connect(process.env.MONGO_KEY)
    .then(() => {
        console.log("success")
    }).catch(e => {
    console.log(e)
    console.log("fail")
})


app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }}))

app.listen(4000)

app.use(cors({credentials: true, origin: true}))
app.use(express.json())
app.use("/", mainRouter)