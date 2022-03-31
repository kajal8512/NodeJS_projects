const express =require("express")
const app = express();
const bodyParser = require("body-parser")
const router=require('./routes/routes')
const cookie=require("cookie-parser")
const port = 5000
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cookie())
app.use('/',router)
app.listen(port, ()=>{
    console.log("server is Listening");
})