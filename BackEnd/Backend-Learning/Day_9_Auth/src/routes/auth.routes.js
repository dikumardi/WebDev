const express = require('express');
const userModel = require('../model/user.model');

const router = express.Router()

/**
POST  /register
POST  /login
GET  /user
GET  /logout

**/

router.post('/register',async(req,res) => {
    const {username,password}= req.body
    
    const user = await userModel.create({
      username,password
    })
    res.status(201).json({
        message:"User registered successfully",
        user
    })
})

router.post('/login', async(req,res) => {
    const {username,password}=req.body

    const user = await userModel.findOne({
        username:username
    }) 
    if (!user) {
        return res.status(401).json({
            message:"user account not found"
        })
    }
      const isPasswordValid = password == user.password
      if (!isPasswordValid) {
           return res.status(401).json({
            message:"Invalid password"
        })
      }
    
    

      res.status(200).json({
        message:"User LoggedIn successfully"
      })

})



module.exports = router