const express = require("express")
var course = require('./CourseData.json')
var fs = require("fs")

const app = express()
app.use(express.json());

app.listen(3000,()=>{
    console.log("listening on port 3000");
})

app.get('/Course',(req,res)=>{
    res.send(course)
})

// get by id 
app.get('/api/course/:id',(req,res)=>{
    let id =req.params.id
    let index = course.findIndex((cours)=>{
        return (cours.id == Number.parseInt(id))
    })
    if (index >= 0){
        let cou = course[index]
        course.splice(index,1)
        res.json(cou)
    }
    else{
        res.status(404)
    } 
})


// client data server ko deta hai
app.post('/api/course',(req,res)=>{
    // console.log(req.body)
    if(!req.body.name){
        res.status(400)
        return res.json({error:"name is requried"})
    }
    const user ={
        id:course.length+1,
        name:req.body.name,
        logo:req.body.logo,
        notes:req.body.notes,
        days_to_complete:req.body.days_to_complete,
        short_description:req.body.short_description,
        type:req.body.type,
        course_type:req.body.course_type,
        lang_available:[req.body.lang_available]
    }
    course.push(user)
    fs.writeFileSync("./CourseData.json",JSON.stringify(course,null,3))
    res.json(user)

})


// put update data

app.put('/course/:id',(req,res)=>{
    let id =req.params.id
    let name = req.body.name
    let logo = req.body.logo
    let notes = req.body.notes
    let days_to_complete=req.body.days_to_complete
    let short_description=req.body.short_description
    let type =req.body.type
    let course_type=req.body.course_type
    let lang_available=[req.body.lang_available]

    let index=course.findIndex((cours)=>{
        return(cours.id == Number.parseInt(id))
    })
    if(index >=0){
        let cou=course[index]
        cou.name = name   
        cou.logo=logo
        cou.notes=notes
        cou.days_to_complete=days_to_complete
        cou.short_description=short_description
        cou.type=type
        cou.course_type=course_type
        cou.lang_available=lang_available
        console.log(cou);
        res.json(cou)
        fs.writeFileSync("./CourseData.json",JSON.stringify(course,null,3))

    }
    else{
        res.status(404)
    }
    

    
})

// how to delete any object

app.delete('/api/course/:id',(req,res)=>{
    let id =req.params.id
    let index = course.findIndex((cours)=>{
        return (cours.id == Number.parseInt(id))
    })
    if (index >= 0){
        let cou = course[index]
        course.splice(index,1)
        res.json(cou)
    }
    else{
        res.status("error")
    } 
})





