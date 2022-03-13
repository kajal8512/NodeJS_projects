const express = require("express");
app=express()
const knex=require("../model/data")

// by get
const getcourse=(req,res)=>{
    knex.select('*').from("srltable")
    .then ((data)=>{
        res.send({data})
    })
    
}


// get by id 
const getById = (req,res)=>{
    knex.select('*').from('srltable').where({id:req.params.id})
    .then((data)=>{
        res.send({"get by id":data})
    }).catch((err)=>{
        console.log(err)
    })
}


const addcourse=(req,res)=>{
    // res.json(req.body)
    const data ={  
        name:req.body.name, 
        logo:req.body.logo, 
        notes:req.body.notes, 
        days_to_complete:req.body.days_to_complete, 
        short_description:req.body. short_description, 
        type:req.body.type, 
        course_type:req.body.course_type,
        lang_available:req.body.lang_available
                }
        // console.log(data)
    knex('srltable').insert(data)
    .then((data)=>{
        res.send({'new data add':data});
    }).catch((err)=>{
        console.log(err);
    
    })
        // res.json(req.body)
        
}


// for updating data 
const putcourse = (req,res)=>{
    knex.select('*').from('srltable').where("id","=",req.params.id)
    .update({
        id:req.body.id,
        name:req.body.name, 
        logo:req.body.logo, 
        notes:req.body.notes, 
        days_to_complete:req.body.days_to_complete, 
        short_description:req.body. short_description, 
        type:req.body.type, 
        course_type:req.body.course_type,
        lang_available:req.body.lang_available

    })
    .then((data)=>{
        console.log(data);
        res.send({"data updated":data})
    })
    .catch((err)=>{
        console.log(err);
    })

}

// delete by id
const delecourse=(req,res)=>{
    knex.delete('*').from("srltable").where('id',req.params.id)
    .then ((data)=>{
       res.send(data)
       
    }).catch((err)=>{
        res.send(err)
        
    })
    
}

module.exports={
    addcourse,
    getcourse,
    getById,
    putcourse,
    delecourse
}