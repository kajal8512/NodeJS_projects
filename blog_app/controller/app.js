const knex = require("../model/connection");
const bcrypt = require("bcrypt")
const cookie=require('cookie-parser')
const jwt = require('jsonwebtoken');

// Insert iteam in the table

const Registration = (req, res) => {

    if (!req.body.username || !req.body.password || !req.body.email){
        res.status(400)
        return res.json({
            message:"failed"
        })
    }
    
    else{
        
        const hash = bcrypt.hashSync(req.body.password,10)
        const user = req.body;
        const details = {
        username: user.username,
        password:hash,
        email: user.email
    };
    knex("ragistertable").insert(details)
    .then((user) => {
      res.send({message:"inserted"});
    })
    .catch((err) => {
      res.send({message:"Email already exist!", message:err});
      console.log(err);
    });
    
}
};




const login = (req,res)=>{
  if(!req.body.password  || !req.body.email){
    res.send({message:"All fild required"})
  }
  knex.select("*").from("ragistertable").where("email","=",req.body.email,"password","=",req.body.password)
  .then((details)=>{
    if(details.length===0){
      res.send({message:"user not exists"})

    }else{
        var compare= bcrypt.compareSync(req.body.password,details[0].password)
        // console.log(compare)
        if(compare===false){
          res.send({message:"Invalid email/password"})
        }
        else{
          const token = jwt.sign({userid:details[0].userid}, "kajalyadav@123456", { expiresIn: '8h' });
          console.log(token)
          res.cookie("user",token)
          res.send({message:'You are login succsuflly!',
          users:details,
          token:token})
        }
      }

        console.log(details)
          
        });


}

const logout = (req,res)=>{
    res.clearCookie("token")
    res.send({msg:"you have logged successfuly"})
}


module.exports = { Registration,login,logout };


// post id outincriment
// user id integer
// title string
// Descriapction string


// Like dislike
// post integer
// user id:token se aaega
// like boolen
// dislike boolen


