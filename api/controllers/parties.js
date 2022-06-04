const { partiesModel } = require("../models");

const createParty = (req, res) => {
    const {body} = req
    console.log(body)
    const data = await partiesModel.create(body)
    res.send(data)
}

const getParties = (req, res) => {
    console.log("get parties")
}

module.exports = {
    createParty,
    getParties,
}