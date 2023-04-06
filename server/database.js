const mongoose = require('mongoose');
function DbConnect() {
    const DB_URL = process.env.DB_URL;
    // Database connection
    mongoose.connect("mongodb+srv://collegeconnect3168:Cyber@3168@cluster0.nyhdxfd.mongodb.net/?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    });
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', () => {
        console.log('DB connected...');
    });
}

module.exports = DbConnect;
