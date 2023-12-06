const mongoose = require('mongoose');
const Duck = require('./duck-schema'); 
const dbURI = 'mongodb+srv://user1:user1@cluster0.fnlanyu.mongodb.net/Ducks?retryWrites=true&w=majority';

try {


    mongoose.connect(dbURI).then(
        () => {
            console.log("Mongoose is connected");
        },
        (err) => {
            console.log(err);
        }
    );
}


catch (e) {
  console.log("could not connect");
}

async function connectDB() {
    try {
        await mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Mongoose is connected");
    } catch (error) {
        console.error("Error connecting to the database:", error.message);
        throw error;
    }
}

module.exports = { connectDB };