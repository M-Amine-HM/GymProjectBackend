const clientSchema = require("../models/ClientModel");

/// GET
module.exports.getClient = async (req, res, next) => {
    try {
      const clientList = await clientSchema.find();
    
      if (clientList.length == 0 && !clientList) {
        throw new Error("Users not found ");
      }
      console.log(clientList);
      
      res.status(200).json(clientList,);
  
    } catch (err) {

      res.status(500).json({ message: err.message });
    }
  }


  


  /// ADD
module.exports.addClient = async (req, res, next) => {
    try {
  
      console.log(req.body);
  
      const { nom, nbClients, tarif,total} = req.body;
      const client = new clientSchema ({
        //nbMois,
        nom,
        //email,
       // prenom,
        nbClients,
        total,
        tarif,

    
       
      });
      const clientAdded = await client.save();
      res.status(201).json(clientAdded);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
  


  /// UPDATE
module.exports.update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { nom,  nbClients, tarif,total,} = req.body;
    const checkClient = await clientSchema.findById(id);
    if (!checkClient) {
      return res.status(404).json({ message: "User not found" });
    }

    const updateObject = {};
    if (nom) updateObject.nom = nom;
    //if (email) updateObject.email = email;
    //if (prenom) updateObject.prenom = prenom;
    if (nbClients) updateObject.nbClients = nbClients;
    if (total) updateObject.total = total;
    if (tarif) updateObject.tarif = tarif;
    //if (nbMois) updateObject.nbMois = nbMois;
 

    const updatedClient = await clientSchema.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updatedClient);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}
  // /// GETBYDATE
  // module.exports.getCalandarByNbMois= async (req, res, next) => {
  //   try {
  //       const query={};
  //       query["nbMois"]=req.params.attribute
  //     const clientList = await clientSchema.find(query);
    
  //     if (clientList.length == 0 && !clientList) {
  //       throw new Error("Client not found ");
  //     }
  //     console.log(clientList);
      
  //     res.status(200).json(clientList,);
  
  //   } catch (err) {
  //     res.status(500).json({ message: err.message });
  //   }
  // }