const knex = require("../model/connection")

// Get data from Department 
GetDepartment = (req,res)=>{
    knex("department").select("*")
    .then((data)=>{
        res.send({msg:"data send successfuly",
    data:data})
    }).catch((err)=>{
        console.log(err);
        res.send(err)
    })
}


// Get by id data from Department
Get_data_id_department = (req,res)=>{
    knex.select("*").from("department").where("department_id","=",req.params.department_id)
    .then((data)=>{
        res.send({msg:"data send successfuly",
        data:data})
    }).catch((err)=>{
        console.log(err);
        res.send(err)
    })
}


// Get data from category
GetCategory = (req,res)=>{
    knex("category").select("*")
    .then((data)=>{
        res.send({msg:"data send successfuly",
    data:data})
    }).catch((err)=>{
        console.log(err);
        res.send(err)
    })
}

// Get by id data from category
Get_data_id_category = (req,res)=>{
    knex.select("*").from("category").where("category_id","=",req.params.category_id)
    .then((data)=>{
        res.send({msg:"data send successfuly",
        data:data})
    }).catch((err)=>{
        console.log(err);
        res.send(err)
    })
}



// join table category to product id
joinCategory = (req,res)=>{
     knex("category")
    .select("category.category_id","category.department_id","category.name")

    .join("product_category","category.category_id","=","product_category.category_id")

    .where("product_category.product_id","=",req.params.product_id)
    .then((data)=>{
        console.log(data)
        res.send({data:data})
    })
    .catch((err)=>{
        console.log(err);
        res.send(err)
    })
}

module.exports={GetDepartment,
            Get_data_id_department,
            GetCategory,
            Get_data_id_category,
            joinCategory};