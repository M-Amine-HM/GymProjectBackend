//cerate schema 

const mongoose = require("mongoose");

let dataSchema = new mongoose.Schema({

    'name': {
        required: true,
        type: String
    },
    'email': {
        required: true,
        type: String
    },
    'password': {
        required: true,
        type: String
    },
    'sexe': {
        required: true,
        type: String
    },
    'height': {
        required: true,
        type: String
    },
    'weight': {
        required: true,
        type: String
    },
    'phoneNumber': {
        required: false,
        type: String
    },
    'adress': {
        required: false,
        type: String
    }, 'image': {
        required: false,
        type: String
    }




})
// module.exports=mongoose.model("nomd de collection",dataSchema)                         
module.exports = mongoose.model("users", dataSchema);