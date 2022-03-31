const express =require("express");
const { GetDepartment, 
    Get_data_id_department, 
    GetCategory, 
    Get_data_id_category, 
    joinCategory} = require("../controller/department");
const router = express.Router();


// get data from Department

router.get("/department",GetDepartment)
router.get("/department/:department_id",Get_data_id_department)


// get data from category
router.get("/category",GetCategory)
router.get("/category/:category_id",Get_data_id_category)

// join table then get by product by id
router.get("/category/inproduct/:product_id",joinCategory)


module.exports=(router)