const userModel = require("../model/user.model")
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


async function registerController(req,res) {
  const {username,password}=req.body

    const userExist = await userModel.findOne({username})

    if (userExist) {
        return res.status(409).json({
            message: "User already exists"
        });
    }

    const user = await userModel.create({
        username,
        password:await bcrypt.hash(password,10)
    })
    const token =jwt.sign({
        id:user._id
    },process.env.JWT_SECRET)

    res.cookie('token',token)
    res.status(201).json({message:"User created successfully",user})
}

async function loginController(req,res) {
    const {username, password} = req.body
    const user = await userModel.findOne({username})

    if (!user) {
        return res.status(404).json({message:"User not found"})
    }
  
    const isPasswordValid = await bcrypt.compare(password,user.password);

    if (!isPasswordValid) {
        return res.status(401).json({message:"Invalid Password"})
    }

    const token = jwt.sign({id:user._id},process.env.JWT_SECRET)

    res.status(200).json({message:"User LoggedIn successfully",
        user:{
            username:user.username,
            id:user._id
        }
    })
}


module.exports = {
    registerController,
    loginController
}