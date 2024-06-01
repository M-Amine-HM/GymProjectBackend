const calandarSchema = require("../models/calander");



/// GET
module.exports.getCalandar = async (req, res, next) => {
    try {
      const calandarList = await calandarSchema.find();
    
      if (calandarList.length == 0 && !calandarList) {
        throw new Error("Calandar not found ");
      }
      console.log(calandarList);
      
      res.status(200).json(calandarList,);
  
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  /// GETBYDATE
module.exports.getCalandarByDate = async (req, res, next) => {
    try {
        const query={};
        query["date"]=req.params.attribute
      const calandarList = await calandarSchema.find(query);
    
      if (calandarList.length == 0 && !calandarList) {
        throw new Error("Calandar not found ");
      }
      console.log(calandarList);
      
      res.status(200).json(calandarList,);
  
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
/// ADD
module.exports.addCalandar = async (req, res, next) => {
    try {
  
      console.log(req.body);
  
      const { date, events} = req.body;
      const clandar = new calandarSchema({
        date,
        events
       
      });
      const calandarAdded = await clandar.save();
      res.status(201).json(calandarAdded);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }


/// UPDATE
module.exports.updateCalandar = async (req, res, next) => {
    try {
      const { id } = req.params;
      const {  date,
        events} = req.body;
      const checkCalandar= await calandarSchema.findById(id);
      if (!checkCalandar) {
        return res.status(404).json({ message: "User not found" });
      }
  
      const updateObject = {};
      if (date) updateObject.date = date;
      if (events) updateObject.events = events;
     
  
      const updatedCalandar = await calandarSchema.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.status(200).json(updatedCalandar);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
  
  /// DELETE
module.exports.deleteCalandar = async (req, res, next) => {
    try {
      const { id } = req.params;
      const checkCalandar = await calandarSchema.findById(id);
      if (!checkCalandar) {
        throw new Error("user not found");
      }
      await calandarSchema.findByIdAndDelete(id);
      res.status(200).json("Calandar deleted");
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };