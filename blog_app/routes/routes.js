const express = require("express")
const router =express.Router()
const {Registration,login, logout}=require('../controller/app')
router.post('/post',Registration)
router.post('/post/login',login)
router.delete("/delete",logout)
const {authentication}=require("../controller/auth")


// const checkauth = require("../controller/auth")
const { Postid } = require("../controller/post")
// const post = require("..controller/post")
const {likeDislike, read} =require("../controller/likeDislike")


// router.post('/post/login/auth',checkauth)
router.post("/createPost",authentication,Postid)

router.post('/likedislike',authentication,likeDislike)
router.get('/likedislike/post',authentication,read)







module.exports=(router)

