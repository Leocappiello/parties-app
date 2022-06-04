const e = require('express')
const mongoose = require('mongoose')

const dbConnect = () => {
    const DB_URI = process.env.DB_URI
    mongoose.connect(DB_URI, (err, res) => {
        if(!err){
            console.log("connected")
        } else {
            console.log("error:" + err)
        }
    })
}

module.exports = dbConnect