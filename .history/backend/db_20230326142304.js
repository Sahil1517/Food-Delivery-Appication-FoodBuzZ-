const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://FoodBuzZ:Sahil123@cluster0.qoqbyya.mongodb.net/FoodBuzZ?retryWrites=true&w=majority'
//const mongoURI = 'mongodb://FoodBuzZ:Sahil123@ac-k3fj1d1-shard-00-00.qoqbyya.mongodb.net:27017,ac-k3fj1d1-shard-00-01.qoqbyya.mongodb.net:27017,ac-k3fj1d1-shard-00-02.qoqbyya.mongodb.net:27017/FoodBuzZ?ssl=true&replicaSet=atlas-krzqfd-shard-0&authSource=admin&retryWrites=true&w=majority'
const mongoDB = async() =>{
    await mongoose.connect(mongoURI,{useNewUrlParser: true},async(err, result)=>{
        if(err) console.log("--", err)
        else {
            console.log("connected");  
            const fetched_data = await mongoose.connection.db.collection("food_items");
            fetched_data.find({}).toArray(async function(err, data){
                const fetched_data = await mongoose.connection.db.collection("foodCategory");
                foodCategory.find({}).toArray(function(err, catData){
                    if(err) console.log(err);
                else {
                global.food_items = data;
                global.foodCategory = catData;
                
                }

                })
                
            })
        }
    });
}

module.exports = mongoDB;