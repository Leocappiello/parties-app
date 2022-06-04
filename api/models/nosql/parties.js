const mongoose = require('mongoose')

const PartysScheema = new mongoose.Schema(
    {
        name: {
            type: String
        },
        participants: {
            type: Array
        },
        bills: {
            type: Array
        }
    }
)

module.exports = mongoose.model("parties", PartysScheema)