const mongoose =require ("mongoose");
const calandarSchema = new mongoose.Schema(
    {
        date:{type:String,},
        events:{

            type:[String]
        }
      
   
      


    },{timestamps:true}
)
const Calandar = mongoose.model("Calandar",calandarSchema);
module.exports=Calandar;