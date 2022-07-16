const config = require('config')
const mongoose = require('mongoose')
const db = config.get('mongoURI')

const connectDB = async () => {
    try {
        await mongoose.connect(db,{
            useNewUrlParser: true
        })
        console.log("MongoDB connected")
    } catch (error) {
        console.log("There is some error in connecting mOngoDB ")
        console.log(error.message)
        process.exit(1)
    }
}

module.exports = connectDB;