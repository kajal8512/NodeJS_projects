fs = require("fs")
// let user = require("readline-sync")
const axios = require("axios");
const { response } = require("express");
axios.get("https://api.merakilearn.org/courses")
.then(resp=>{
    response=resp.data
    // console.log(response)
    file=JSON.stringify(response, null, 3)
    data = fs.writeFileSync("CourseData.json",file)
})
module.exports = response
