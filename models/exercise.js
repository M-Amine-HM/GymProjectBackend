//cerate schema 

const mongoose = require("mongoose");

let dataSchema = new mongoose.Schema({

    'bodyPart': {
        required: true,
        type: String
    },
    'name': {
        required: true,
        type: String
    },
    'image': {
        required: true,
        type: String
    },
    'video': {
        required: true,
        type: String
    },
    'description': {
        required: true,
        type: String
    },
    'instructions': {
        type: [String], // specifying array of strings
        required: false
    },
    'warnings': {
        type: [String], // specifying array of strings
        required: false
    },




})
// module.exports=mongoose.model("nomd de collection",dataSchema)                         
module.exports = mongoose.model("exercises", dataSchema);