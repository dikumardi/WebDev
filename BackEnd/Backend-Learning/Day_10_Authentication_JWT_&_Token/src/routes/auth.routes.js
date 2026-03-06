const express = require('express');
const userModel = require('../model/user.model');
const jwt = require('jsonwebtoken');

const router = express.Router();
/**
 * /register
 * /login
 * /user[proctected]
 * /logout
 */

router.post('/register', async(req,res)=> {

    const { username , password } = req.body
    
    const isUserAlreadyExists = await userModel.findOne({
        username
    })

    if ( isUserAlreadyExists) {
        return res.status(409).json({
            message:"Username already Exsist"
        })
    }

    const user= await userModel.create(
        {username,password}
    )

    const token = jwt.sign({id:user._id} ,process.env.JWT_SECRET)
    res.cookie("token",token,{
  expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7)
    })

    res.status(201).json({
    message:"User registered successfully",
    user
})
})

router.get('/user', async(req,res) => {

 
    const token = req.cookies.token

    if (!token) {
        return res.status(401).json({
            message:"User not found"
        })

        
    }

    try {
         const decoded = jwt.verify(token,process.env.JWT_SECRET)
     const user = await userModel.findOne({
        _id:decoded.id
     })
     return res.status(200).json({
        message:"user data fetched successfully",
        user
     })
        
    } catch (error) {
          return res.status(401).json({
            message:"Unauthorized invalid token"
        })
        
    }
})

router.post('/login', async(req,res) => {
    const {username,password}=req.body

    const user = await userModel.findOne({username})
    if (!user) {
        return res.status(404).json({
            message:"User account not found"
        })

    }

    const isPasswordValid = user.password == password

    if (!isPasswordValid) {
         return res.status(404).json({
            message:"Invalid"
        })
    }
    const token= jwt.sign({id:user._id},
        process.env.JWT_SECRET
    )

    res.cookie("token", token,{
    expires: new Date(Date.now() + 100 * 60 * 60 * 24 * 7)
    })

    res.status(200).json({
        message:"user logged in successfully",
        user
    })
})

router.get('/logout', (req,res) => {
  res.clearCookie("token")

  res.status(200).json({
    message:"User logged out successfully"
  })
})

module.exports = router;