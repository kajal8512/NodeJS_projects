const axios = require("axios")
const fs = require("fs")

axios.get("https://api.merakilearn.org/courses")

const app = require("express");
const bodyParser = require("body-parser")

// console.log(srl_data)
const data1=fs.readFileSync('CourseData.json','utf8')
const srl_data=JSON.parse(data1)

const abc=require('../model/data.js')
for (i of srl_data){
    // console.log(i);
    
    abc('srltable').insert({name:i.name, logo:i.logo, notes:i.notes, 
        days_to_complete:i.days_to_complete,short_description:i.short_description, type:i.type,course_type:i.course_type, lang_available:i.lang_available})
    .then(()=>{
        console.log('insert');
    }).catch((err)=>{
        console.log(err);
    })
}




// module.exports={knex}