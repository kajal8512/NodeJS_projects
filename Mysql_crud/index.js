const bodyParser = require("body-parser");
const express = require("express");
const app = express()
const  route = require("./routes/routes")
app.use(express.json())
// app.use(bodyParser())

app.use('/',route);

app.listen(3000,()=>{
    console.log("listening on port 3000");
})
