let express = require("express")

let app = express()

app.use(express.json())
let myToken = "12345"

let checkToken = (req, res, next) => {
    if (req.query.token == "" || req.query.token == undefined) {
        return res.send({
            status: 0,
            msg: "please fill the token"
        })
    }
    if (req.query.token != myToken) {
        return res.send({
            status: 0,
            msg: "please fill the  correct token"
        })
    }
    next();
}
app.use(checkToken)  // Middleware
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
    // res.status(200).json()
    res.send({ status: 1, msg: "new API" })
})



app.listen("8000")