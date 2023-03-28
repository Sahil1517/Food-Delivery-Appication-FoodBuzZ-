const mongoose = require('mongoose')
const mongoURI = 'mongodb+srv://FoodBuzZ:Sahil123@cluster0.qoqbyya.mongodb.net/foodBuzZ?retryWrites=true&w=majority'
const mongoDB = async() =>{
    await mongoose.connect(mongoURI,()=>{
        console.log("connected");
    });
}

module.exports = mongoDB;