const knex=require("../model/connection");



// post id outincriment
// user id integer
// title string
// Descriapction string

const Postid=((req,res)=>{
    if(!req.body.title || !req.body.description){
        res.status(400)
        return res.json({
            message:"failed"
        })
    }else{
        user ={
            user_id:req.userData.userid,
            title:req.body.title,
            description:req.body.description
        }
        knex("posttable").insert(user)
        .then(() => {
            res.send({message:"post data success"});
        })
        .catch((err) => {
            res.send({message:"already inserted", message:err});
            console.log(err);
        });
    }
})



module.exports={Postid}