//cerate schema 

const mongoose = require("mongoose");

let dataSchema = new mongoose.Schema({

    'planName': {
        required: true,
        type: String
    },

    'userId': {
        required: true,
        type: String
    },
    'nbrExercises': {
        required: true,
        type: String
    },
    'exercises': {
        type: [String], // specifying array of strings
        required: false
    },
    'nbrsSeries': {
        type: [String], // specifying array of strings
        required: false
    },




})
// module.exports=mongoose.model("nomd de collection",dataSchema)                         
module.exports = mongoose.model("plans", dataSchema);