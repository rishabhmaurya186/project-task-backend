require('dotenv').config()
const jwt = require("jsonwebtoken")
const cookieParser = require("cookie-parser")
const dbOperation = require('./handle-db-Operation')

const generateToken = async (email,password)=> {
    try {
      const token= jwt.sign(
        {
          email
        },
        process.env.JWTSECERET
      );
      return token;
    } catch (error) {
      res.status(500).json("Internal server error.")
    }
  };


  const auth = async (req, res,next) => {
    try {
      const token = req.headers.token
      if (!token) {
          return res.status(401).json({ message: 'Unauthorized: No token provided' });
      }
  
      const data = await jwt.verify(token, process.env.JWTSECERET)
  
      if(!data){
        return res.status(404).json({msg:'user not found'});
      }
       req.body.user_email = data.email
       next()
      
    } catch (error) {
      res.status(500).json("Internal server error.")
    }
  }







  const jwtHelper = {generateToken,auth}

  module.exports = jwtHelper;