require('dotenv').config()
const express = require("express")
const mongoose = require('mongoose')
const app = express()
const cors = require('cors');

const cardRoutes = require('./routes/routes')

app.use(express.json())
app.use(cors());

app.use((req, res, next) => {
    console.log(req.path)
    console.log(req.method)
    next()
})


app.use('/api/cards', cardRoutes)


mongoose.connect("mongodb://localhost:27017/flashcardDB", {useNewUrlParser: true})
.then(() => {
    console.log("connected to the DB")
    app.listen(4000, () => {
        console.log("server started on port 4000")
    })
})
.catch((err) => {
    console.log(err)
})
