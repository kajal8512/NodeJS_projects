const knex = require("../model/connection")
 
likeDislike=(req,res)=>{
    knex.select("*").from("posttable").where("postid","=",req.body.postid)
    .then((postdata)=>{
        // console.log(data)
        if(postdata.length===0){
            res.send({message:"post not exists"})
        }
        else{
            knex.select("*").from("likeDislike").where({user_id:req.userData.userid,postid:req.body.postid})
            .then((data)=>{
            if(data.length>0){
                console.log(data);
                res.send("you have already liked/dislike the post")
            }

            else{
                // console.log(req.body);
                const post={
                    user_id:req.userData.userid,
                    postid:req.body.postid,
                    like:req.body.like,
                    dislike:req.body.dislike
                }
                knex('likeDislike').insert(post)
                .then(()=>{
                    knex.select('*').from('likeDislike').where("postid","=",req.body.postid)
                    .then((likedata)=>{
                        // console.log(likedata);
                        res.send({
                            message:'You like/dislike post',
                            post:likedata
                        })

                        }).catch((err)=>{
                            res.send({message:err})
                            console.log(err);
                        })
            
                    
       
                }).catch((err)=>{
                    console.log(err);
                    res.send({message:'post not found'})
                })
            }
        })
        }

    })
}

const read = (req,res)=>{
    knex('posttable')
    // .leftJoin('likeDislike','posttable.postid','likeDislike.postid')
    // // .innerJoin('ragistertable','ragistertable.userid','likeDislike.user_id')
    .select('*')
    .then(async(data)=>{
        console.log(data);
        for (i in data){
            
            var b = await knex("likeDislike").where({"postid":data[i].postid})
            if(b.length===0){
                data[i].like=0
                data[i].dislike =0
                // data
            }
            // else{
            //     like=0
            //     dislike=0
            //     for (i in data){
                
            //     }
            // }
            console.log(b);
        }
        res.send({
            message:'All data',
            data:data
        })
    }).catch((err)=>{
        res.send(err)
    })
}




module.exports ={likeDislike,read} 
