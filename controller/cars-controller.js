const { ObjectId } = require('mongodb');
const dbOperation = require('../middleware/handle-db-Operation');

const addCar = async (req, res) => {
    try {
        const { type, name, model, car_info } = req.body;

        const car = { type, name, model, car_info };

        const result = await dbOperation.addData(car, "cars");
        console.log(result);
        res.status(200).json({ message: 'Data added successfully', data: result });
    } catch (err) {
        console.error('Error adding car:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const getCar = async (req, res) => {
    try {
        const carsCollection = await dbOperation.collection("cars");
        const cursor = carsCollection.find();
        const cars = await cursor.toArray();
        res.status(200).json({ cars });
    } catch (error) {
        console.error('Error fetching data from MongoDB:', error);
        res.status(500).json({ error: 'Internal server issue.' });
    }
};
const getCarById = async (req, res) => {
    try {
        const { id } = req.params; // Assuming ID is in URL parameters
        console.log("Searching for car with ID:", id);

        // Assuming dbOperation is your MongoDB connection
         const carObjectId = new ObjectId(id);
         console.log(carObjectId);
        const carsCollection = await dbOperation.collection("cars");
        const carData = await carsCollection.findOne({_id:carObjectId});

        if (!carData) {
            console.log("Car not found");
            return res.status(404).json({ error: "Car not found" });
        }

        console.log("Car found:", carData);
        res.status(200).json({ msg: "Car found", carData });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

const deleteCar = async (req,res)=>{
    try {
        const { id } = req.params;
        const carObjectId = new ObjectId(id);
         console.log(carObjectId);
        const carsCollection = await dbOperation.collection("cars");
        const carData = await carsCollection.findOneAndDelete({_id:carObjectId});

        if (!carData) {
            console.log("Car not found");
            return res.status(404).json({ error: "Car not found" });
        }

        console.log("Car found:", carData);
        res.status(200).json({ msg: "Car Data deleted.", carData });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}




const cars = { addCar, getCar,getCarById,deleteCar };
module.exports = cars;
