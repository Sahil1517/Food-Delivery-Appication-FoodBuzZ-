const mongoose = require('mongoose');
const mongoUri = 'mongodb+srv://FoodBuzz:Sahil123@cluster0.hqwjs7u.mongodb.net/FoodBuzz?retryWrites=true&w=majority'
// const mongoDb=async() =>{
//     //mongoose.set('strictQuery', false);

// await mongoose.connect(mongoUri,{useNewUrlParser:true},async(err, result)=>{
//     if(err) console.log("---", err)
//     else{
//         console.log("connected");
//         const fetchedData = await mongoose.connection.db.collection("food_items");
//         fetchedData.find({}).toArray(function(err, data) {
//             if(err) console.log(err);
//             else console.log();
//         })
//     }
// });
// }

module.exports = function (callback) {
    mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {
        // mongoDbClient.connect(mongoURI, { useNewUrlParser: true }, async(err, result) => {
        if (err) console.log("---" + err)
        else {
            // var database =
            console.log("connected to mongo")
            const foodCollection = await mongoose.connection.db.collection("food_items");
            foodCollection.find({}).toArray(async function (err, data) {
                const categoryCollection = await mongoose.connection.db.collection("Categories");
                categoryCollection.find({}).toArray(async function (err, Catdata) {
                    callback(err, data, Catdata);

                })
            });
            // listCollections({name: 'food_items'}).toArray(function (err, database) {
            // });
            //     module.exports.Collection = database;
            // });
        }
    })
};
