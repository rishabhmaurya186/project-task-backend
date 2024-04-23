const { ObjectId } = require("mongodb");
const dbOperation = require("../middleware/handle-db-Operation");
const hashing = require('../middleware/hash_password')
const addDealership = async (req, res) => {
  try {
    const {
      dealership_email,
      dealership_name,
      dealership_location,
      password,
      dealership_info,
      cars,
      deals,
      sold_vehicles,
    } = req.body;
    

    const dealership = {
        dealership_email,
        dealership_name,
        dealership_location,
        password,
        dealership_info,
    };
    if (cars) {
        dealership.cars = [cars];
    }
    if (deals) {
        dealership.deals = [deals];
    }
    if (sold_vehicles) {
        dealership.sold_vehicles = [sold_vehicles];
    }

    const dealershipCollection = await dbOperation.collection("dealerships");
        const userExist = await dealershipCollection.findOne({ dealership_email })
        
        if(userExist){
           return res.status(200).json("user email already exist.")
        }
        dealership.password =await hashing.hash(dealership.password)
    const result = await dbOperation.addData(dealership, "dealerships");
    console.log(result);
    res.status(201).json({ message: "Data added successfully", data: result });
  } catch (err) {
    res.status(500).json({ error: "Internal server error", err });
  }
};
const getdealerships = async (req, res) => {
  try {
      const dealershipsCollection = await dbOperation.collection("dealerships");
      const cursor = dealershipsCollection.find();
      const dealerships = await cursor.toArray();
      res.status(200).json({ dealerships });
  } catch (error) {
      console.error('Error fetching data from MongoDB:', error);
      res.status(500).json({ error: 'Internal server issue.' });
  }
};
const dearship = { addDealership,getdealerships };
module.exports = dearship;
