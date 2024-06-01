const revenueSchema = require("../models/revenueModel");
var _getClient = require('./clientDetails')



/// GET
module.exports.getRevenue = async (req, res, next) => {
    try {
      const revenueList = await revenueSchema.find();
    
      if (revenueList.length == 0 && !revenueList) {
        throw new Error("Users not found ");
      }
      console.log(revenueList);
      
      res.status(200).json(revenueList);
  
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }



   

//   ADD
module.exports.addRevenue = async (req, res) => {
  try {
      const currentDate = new Date();
      const currentMonthName = currentDate.toLocaleString('default', { month: 'long' });
      const currentYearName = currentDate.getFullYear().toString();

      const newRevenue = new revenueSchema({
          nom_annee: currentYearName,
          nom_mois: currentMonthName,
          totale_par_mois: "0",
          nbClient_par_mois: "0",
      });

      const savedRevenue = await newRevenue.save();
      res.status(200).json(savedRevenue);
      console.log(`Monthly revenue for ${currentMonthName} added successfully`);
  } catch (err) {
      console.error('Error adding monthly revenue', err);
      res.status(500).json({ error: 'Error adding monthly revenue' });
  }
};



// /// GET
// module.exports.getByDate = async (req, res, next) => {
//     try {
//         const query={};
//         query["nom_mois"]=req.params.date    
//           const revenueList = await revenueSchema.find(query);
    
//       if (revenueList.length == 0 && !revenueList) {
//         throw new Error("Users not found ");
//       }
//       console.log(revenueList);
      
//       res.status(200).json(revenueList);
  
//     } catch (err) {
//       res.status(500).json({ message: err.message });
//     }
//   }



  /// UPDATE
module.exports.updateRevenue = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { nom_mois, nbClient_par_mois, totale_par_mois,nom_annee} = req.body;
    const checkRevenur = await revenueSchema.findById(id);
    if (!checkRevenur) {
      return res.status(404).json({ message: " not found" });
    }

    const updateObject = {};
    if (nom_annee) updateObject.nom_annee = nom_annee;
    if (nom_mois) updateObject.nom_mois = nom_mois;
    if (nbClient_par_mois) updateObject.nbClient_par_mois = nbClient_par_mois;
    if (totale_par_mois) updateObject.totale_par_mois = totale_par_mois;

 

    const updatedRevenue = await revenueSchema.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updatedRevenue);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

  