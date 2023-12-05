const mongoose = require('mongoose');
const Duck = require('./duck-schema'); // Path to your duck-schema.js file

// Connection string after cluster0 needs to be changed. Connection information is in Database section in MongoDB Atlas, top left on left nav bar.
// Click on Cluster0, then shell from the following menu. The String is in there.
const dbURI = 'mongodb+srv://user1:user1@cluster0.fnlanyu.mongodb.net/DucksDB?retryWrites=true&w=majority';

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