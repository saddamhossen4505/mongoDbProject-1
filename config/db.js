const mongoose = require('mongoose');

// mongoDBconnection.
const mongoDBconnection = async () => {

    try {
        
        const connect = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB connection is successful`.bgGreen.black);

    } catch (error) {
        console.log(`${error.message}`.bgRed.black);
    }
};



// Export Connection.
module.exports = mongoDBconnection;