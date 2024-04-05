const mongoose = require('mongoose');
const connect = mongoose.connect("mongodb+srv://yOVmfJJ8WOyKy29b:yOVmfJJ8WOyKy29b@cluster0.3munzgz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

// Check database connected or not
connect.then(() => {
    console.log("Database Connected Successfully");
})
.catch(() => {
    console.log("Database cannot be Connected");
})

// Create Schema
const Loginschema = new mongoose.Schema({
    fname: {
        type:String,
        required: true
    },
    lname: {
        type:String,
        required: true
    },
    name: {
        type:String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

// collection part
const collection = new mongoose.model("users", Loginschema);

module.exports = collection;