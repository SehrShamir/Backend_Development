let express = require("express")

let app = express()

app.get("/", (req, res) => {
    res.send({ status: 1, msg: "Home page API" })
})

app.get("/news", (req, res) => {
    res.send({ status: 1, msg: "HOme page API" })
})
app.listen("8000")