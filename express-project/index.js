let express = require("express")

let app = express()

app.use(express.json())

app.get("/", (req, res) => {
    res.send({ status: 1, msg: "HOme Page API" })
})

app.get("/news", (req, res) => {
    res.send({ status: 1, msg: "new API" })
})

app.get("/news/:id", (req, res) => {
    let currentId = req.params.id
    res.send("new Details API" + currentId)
})
app.get('/producst', (req, res) => {

})
app.post("/login", (req, res) => {
    console.log(req.body)
    res.send({ status: 1, msg: "new API" })
})



app.listen("8000")