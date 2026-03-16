let express = require("express");
const { dbConnection } = require("./dbConnection");
const { ObjectId } = require("mongodb");
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
    let checkEmail = await studentCollection.findOne({ sEmail })
    if (checkEmail == null) {
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
    }
})

app.delete("/student-delete/:id", async (req, res) => {
    let { id } = req.params;
    let myDB = await dbConnection();
    let studentCollection = myDB.collection("students")
    let delRes = await studentCollection.deleteOne({ _id: new ObjectId(id) })

    let resOjb = {
        status: 1,
        msg: "Data Delete",
        delRes
    }
    res.send(resOjb)
})

app.put("/student-update/:id", async (req, res) => {
    let { id } = req.params;
    let { sName, sEmail } = req.body;

    let obj = {}
    if (sName != "" && sName !== undefined && sName !== null) {
        obj['sName'] = sName
    }
    if (sEmail != "" && sEmail !== undefined && sEmail !== null) {
        obj['sEmail'] = sEmail
    }
    let myDB = await dbConnection();

    let studentCollection = myDB.collection("students")
    let updateRes = await studentCollection.updateOne({ _id: new ObjectId(id) }, {
        $set:
            obj

    })
    let resObj = {
        status: 1,
        msg: "Data Update",
        updateRes
    }
    res.send(resObj)
})
app.listen("8000")
