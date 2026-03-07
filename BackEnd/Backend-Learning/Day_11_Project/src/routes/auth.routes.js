const express = require('express');
const userModel = require('../model/user.model');
const jwt = require('jsonwebtoken');

const router = express.Router()
/**
POST /register
POST /login
GET /user [protected]


**/

router.post('/register', async(req,res) => {
    const {username,password}=req.body

    const userExist = await userModel.findOne({username})

    if (userExist) {
        return res.status(409).json({
            message: "User already exists"
        });
    }

    const user = await userModel.create({
        username,password
    })
    const token =jwt.sign({
        id:user._id
    },process.env.JWT_SECRET)

    res.cookie('token',token)
    res.status(201).json({message:"User created successfully",user})
})


module.exports = router