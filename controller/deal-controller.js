const { ObjectId } = require('mongodb');
const dbOperation = require('../middleware/handle-db-Operation')
const addDeal = async (req,res)=>{
      try {
        const { car_id, deal_info } = req.body;
        const deal = {
            car_id, deal_info
        };
        if (car_id) {
            deal.car_id = [car_id]; 
        }
        const dealsCollection = await dbOperation.collection("deals")
        const result = await dbOperation.addData(deal,"deals")
        console.log(result);
        res.status(201).json({ message: 'Data added successfully', data: result});
    } catch (err) {
        res.status(500).json({ error: 'Internal server error', err});
    }
}


const deal = {addDeal};
module.exports = deal