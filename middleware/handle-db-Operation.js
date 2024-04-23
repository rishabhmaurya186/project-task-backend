const  {connectToMongoDB} = require('../db');

async function addData(data,collectionName) {
  try {
    const database = await connectToMongoDB();
    const collection = database.collection(collectionName);

   const result = await collection.insertOne(data);
    console.log('Data added successfully');
    return result;
  } catch (error) {
    console.error('Error adding data:', error);
  }
}

const collection = async (collectionName)=>{
    const database = await connectToMongoDB();
    return database.collection(collectionName);
}
const dbOperation = {addData,collection}
module.exports =dbOperation;