const express = require('express')
const jwt = require('jsonwebtoken')
const userModel = require('../models/user.model')

const router = express.Router();

router.post("/create", async(req,res) => {

    const token = req.cookies.token

    if(!token){
      return  res.status(401).json({
            message:"Unauthorized"
        })
   
    }
    try {
       const decoded =  jwt.verify(token, process.env.JwT_SECRET) 
    //    console.log(decoded);

    const user = await userModel.findOne({
        _id:decoded.id
    })
    console.log(user);
    
       

    } catch (err) {
        return res.status(401).json({
            message:"Token is invalid"
        })
    }

    


      res.send("Post Create Successfully")


    /**   console.log(req.body);
  console.log(req.cookies);
  res.send("Post Create Successfully")
   **/
})

module.exports = router;