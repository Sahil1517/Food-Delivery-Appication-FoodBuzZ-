const mongoURI = 'mongodb';
const mongoose = require('mongoose')
const mongoUri = "mongodb+srv://FoodBuzz:Sahil123@cluster0.hqwjs7u.mongodb.net/FoodBuzz?retryWrites=true&w=majority"

module.exports = function (callback) {
    mongoose.set('strictQuery', false);
    mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {
        if (err) console.log("---" + err)
        else {
            console.log("connected to mongo")
            const foodCollection = await mongoose.connection.db.collection("food_items");
            foodCollection.find({}).toArray(async function (err, data) {
                const categoryCollection = await mongoose.connection.db.collection("Categories");
                categoryCollection.find({}).toArray(async function (err, Catdata) {
                    callback(err, data, Catdata);

                })
            });
        }
    })
};