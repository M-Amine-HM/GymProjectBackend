const mongoose =require ("mongoose");
const revenueSchema = new mongoose.Schema(
    {
        nom_mois:{type:String,},
        nom_annee:{type:String,},
        nbClient_par_mois:{type:String,},
        totale_par_mois: { type: String, }


    },{timestamps:true}
)
const Revenue = mongoose.model("Revenue",revenueSchema);
module.exports=Revenue;