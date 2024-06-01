const toDoSchema = require("../models/toDo");


/// GET
module.exports.getToDo = async (req, res, next) => {
    try {
      const toDoList = await toDoSchema.find();
    
      if (toDoList.length == 0 && !toDoList) {
        throw new Error("Note not found ");
      }
      console.log(toDoList);
      
      res.status(200).json(toDoList,);
  
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }


  /// ADD
module.exports.addToDo = async (req, res, next) => {
    try {
  
      console.log(req.body);
  
      const { toDo} = req.body;
      const note = new toDoSchema({
        toDo
       
      });
      const toDoAdded = await note.save();
      res.status(201).json(toDoAdded);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  
  /// UPDATE
module.exports.updateToDo = async (req, res, next) => {
    try {
      const { id } = req.params;
      const { toDo} = req.body;
      const checkToDo= await toDoSchema.findById(id);
      if (!checkToDo) {
        return res.status(404).json({ message: "User not found" });
      }
  
      const updateObject = {};
      if (toDo) updateObject.toDo = toDo;
    
     
  
      const updatedToDo= await toDoSchema .findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.status(200).json(updatedToDo);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  /// DELETE
module.exports.deleteToDo = async (req, res, next) => {
    try {
      const { id } = req.params;
      const checkTodo = await toDoSchema.findById(id);
      if (!checkTodo) {
        throw new Error("note not found");
      }
      await toDoSchema.findByIdAndDelete(id);
      res.status(200).json("note deleted");
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };