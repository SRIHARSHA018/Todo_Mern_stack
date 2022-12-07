const mongoose = require('mongoose');
const { exit } = require('process');


const MONGO_URI = "mongodb+srv://Sri15634:Sri15634@sri.ia0utcy.mongodb.net/?retryWrites=true&w=majority";


const connectDB = async ()=>{
    try{
        await mongoose.connect(MONGO_URI);
        console.log("MongoDb connected");
    } catch(err) {
        console.error(err.message);
        process.exit(1);
    }
}

module.exports = connectDB;