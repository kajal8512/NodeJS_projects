const jwt = require("jsonwebtoken")
const cookies=require('cookie-parser')

const authentication=(req, res, next)=>{
    try{
        var token = req.cookies.user
        var decode = jwt.verify(token,"kajalyadav@123456");
        req.userData=decode
    // console.log(userData);
        req.token=token;
        // req.userData=user;
    next();
    }catch(err){
        res.status(401).json({
            err:"Invaild Token"
        })
        console.log(err);

    }
}
module.exports={authentication}
   