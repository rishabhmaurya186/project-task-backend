const bcrypt = require("bcryptjs");



  const hash = async (password)=>{
    try {
        const saltRound = await bcrypt.genSalt(10);
        return await bcrypt.hash(password, saltRound);
        
      } catch (error) {
        console.log("password hash error" , error);
      }
  }
  const compare = async(password,dbPassword) =>{
    return await bcrypt.compare(password, dbPassword);
  }

  const hashing = {hash,compare}
  module.exports = hashing