const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser');
 const { connectToMongoDB } = require('./db');
 const { validateUserData } = require('./models/userSchema');
const app = express()
const authRoute = require("./routes/auth-router");
const vehicleRoute = require("./routes/vehicle-router")
const carRoute = require("./routes/cars-router")
const dealershipRoute = require("./routes/dealership-router")
const dealRoute = require("./routes/deal-router")
app.use(express.json());
const corsOptions = {
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
  };
  
  app.use(cors({}));
app.use(bodyParser.urlencoded({ extended: false }));





app.use("/api/auth", authRoute);
app.use("/api/soldVehicle",vehicleRoute)
app.use("/api/car",carRoute)
app.use("/api/dealership",dealershipRoute)
app.use("/api/deal",dealRoute)
const PORT =8080;
async function startServer() {
    try {
        await connectToMongoDB();
        app.listen(PORT, () => {
            console.log(`Server listening on port ${PORT}`);
        });
    } catch (err) {
        console.error('Error starting server:', err);
    }
}

startServer();