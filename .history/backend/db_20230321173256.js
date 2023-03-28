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
// 
