const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://DaP2002:Dhruv@25062002@cluster0.uubwx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const connectToMongo = () => {
    mongoose.connect(mongoURI, () => {
        console.log('COnnected to mongo successfully');
    })
}

module.exports = connectToMongo;