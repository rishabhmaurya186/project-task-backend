require('dotenv').config()
const { MongoClient } = require('mongodb');

const uri = process.env.MONGO_URL
const client = new MongoClient(uri);

async function connectToMongoDB() {
    try {
        await client.connect();
        console.log('Connected to MongoDB Atlas');
        return client.db("task");
    } catch (err) {
        console.error('Error connecting to MongoDB Atlas', err);
        throw err;
    }
}

module.exports = { connectToMongoDB };
