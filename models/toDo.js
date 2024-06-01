const mongoose =require ("mongoose");
const toDoSchema = new mongoose.Schema(
    {
        toDo:{type:String,},
     
      
   
      


    },{timestamps:true}
)
const toDo = mongoose.model("toDo",toDoSchema);
module.exports=toDo;