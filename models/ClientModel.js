const mongoose = require("mongoose");
const clientSchema = new mongoose.Schema(
    {
        nom: { type: String, },
        // prenom: { type: String, },
        //email:{type:String,},
        nbClients: { type: String, },
        total: { type: String, },
        tarif: { type: String, },
        //nbMois:{type:Number,},




    }, { timestamps: true }
)
const Client = mongoose.model("GymDetails", clientSchema);
module.exports = Client;