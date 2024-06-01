const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
    {
        nom: { type: String, },
        // prenom: { type: String, },
        email: { type: String, },
        age: { type: String, },
        phone: { type: String, },
        sexe: { type: String, },
        nbMois: { type: Number, },
        image_user: { type: String, required: false },


        // mesures:{
        //     taille:Number,
        //     poids:Number
        // }


    }, { timestamps: true }
)
const User = mongoose.model("UsersSubscrubed", userSchema);
module.exports = User;