let express = require("express");
const { dbConnection } = require("./dbConnection");
let app = express();

app.use(express.json())

app.get("/student-read", (req, res) => {
    res.send("Student View API")
})

app.post("/student-insert", async (req, res) => {
    let myDB = await dbConnection();
    let studentCollection = myDB.collection("students")

    let { sName, sEmail } = req.body;

    // Construct the object to insert
    let obj = {
        sName,
        sEmail
    };
    // let { sName, sEmail } = req.body;
    // let obj = (sName, sEmail);
    console.log(obj);
    let insertRes = await studentCollection.insertOne(obj);
    let resObj = {
        status: 1,
        msg: "Data Insert",
        insertRes
    };
    res.send(resObj);
})

app.listen("8000")
