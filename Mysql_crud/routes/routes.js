const express=require("express")
const router = express.Router()


const app = express();
const{addcourse,getcourse,getById,putcourse, delecourse}=require("../controller/courses")

router.post('/add', addcourse)
router.get('/course', getcourse)
router.get('/course/:id', getById)
router.put('update/course/:id',putcourse)
router.delete('/course/delete/:id',delecourse)

module.exports=router