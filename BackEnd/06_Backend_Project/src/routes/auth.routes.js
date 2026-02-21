const express = require('express');
const authController = require('../controllers/auth.controller')

const router = express.Router();


router.post('/register', authController.registerUser)

module.exports = router;

/**
  
{
    "username":"test",
    "email":"test@test.com",
    "password":"test",  
}  
  "role":"artist"
 
**/