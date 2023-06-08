const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://ilesalth:1s4sYtxhctcJsZ46@cluster0.fsbxrjw.mongodb.net/todo"


const connectToMongoose = () => {
    mongoose.connect(mongoURI)
        .then(() => console.log('Connected!'));
}


module.exports = connectToMongoose;