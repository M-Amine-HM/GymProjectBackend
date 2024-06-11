//cerate schema 

const mongoose = require("mongoose");

let dataSchema = new mongoose.Schema({

    'email': {
        required: true,
        type: String
    },
    'userId': {
        required: true,
        type: String
    },
    'gymName': {
        required: true,
        type: String
    },

    'subscription': {
        required: true,
        type: String
    },
    'daysLeft': {
        required: true,
        type: String
    },
    'entries': {
        required: false,
        type: [String]
    },
    'exits': {
        required: false,
        type: [String]
    },




})
// module.exports=mongoose.model("nomd de collection",dataSchema)                         
module.exports = mongoose.model("usersSubscribedDetails", dataSchema);