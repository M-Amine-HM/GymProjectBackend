const userModel = require("../models/userSchema");
/// GET
module.exports.getUsers = async (req, res, next) => {
  try {
    const userList = await userModel.find();

    if (userList.length == 0 && !userList) {
      throw new Error("Users not found ");
    }
    console.log(userList);

    res.status(200).json(userList,);

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

/// COUNT
module.exports.countUsers = async (req, res, next) => {
  try {
    const userList = await userModel.find();
    const userCount = await userList.length;
    if (userCount == 0 && !userList) {
      throw new Error("Users not found ");
    }
    res.status(200).json({ userCount });
    console.log(userCount)
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}


// GETBYID
module.exports.getUserById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await userModel.findById(id);
    if (user.length == 0 && !user) {
      throw new Error("User not found ");
    }
    console.log(user);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}


/// ADD
module.exports.addUser = async (req, res, next) => {
  try {

    console.log(req.body);

    const { nom, email, prenom, age, mesures, phone, nbMois, image_user } = req.body;
    // let EntersUser = req.body["Enters"].split(",");
    // let ExitUser = req.body["Exits"].split(",");

    const user = new userModel({
      nom,
      email,
      prenom,
      age,
      phone,
      mesures,
      nbMois,
      image_user,
      // EntersUser,
      // ExitUser,

    });
    const userAdded = await user.save();
    res.status(201).json(userAdded);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}



/// UPDATE
module.exports.apdate = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { nom, email, prenom, age, mesures, phone, nbMois, image_user } = req.body;
    const checkUser = await userModel.findById(id);
    if (!checkUser) {
      return res.status(404).json({ message: "User not found" });
    }

    const updateObject = {};
    if (nom) updateObject.nom = nom;
    if (email) updateObject.email = email;
    if (prenom) updateObject.prenom = prenom;
    if (age) updateObject.age = age;
    if (phone) updateObject.phone = phone;
    if (mesures) updateObject.mesures = mesures;
    if (nbMois) updateObject.nbMois = nbMois;
    if (image_user) updateObject.image_user = image_user;

    const updated = await userModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

/// DELETE
module.exports.delete = async (req, res, next) => {
  try {
    const { id } = req.params;
    const checkUser = await userModel.findById(id);
    if (!checkUser) {
      throw new Error("user not found");
    }
    await userModel.findByIdAndDelete(id);
    res.status(200).json("deleted");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/// SEARCH
module.exports.searchUsersByName = async (req, res, next) => {
  // try {
  //   let data;
  //   //find all product 
  //   // let data = await User.findById(req.params.attribute);
  //   // const query = {};
  //   // query["name"] = req.params.attribute;

  //   const query = {};
  //   query["nom"] = { $regex: new RegExp(req.params.attribute, 'i') };
  //   data = await userModel.find(query);
  //   // if (req.params.attribute !== "") {
  //   //     const query = {};
  //   //     query["name"] = { $regex: new RegExp(req.params.attribute, 'i') };
  //   //     data = await User.find(query);
  //   // }
  //   // else {
  //   //     data = await User.find();
  //   // }

  //   //send response fl status ali n7b aliih bl message 
  //   //wela fichier json ali n7b 3leha najm nasna3eha eni
  //   res.status(200).json(
  //     {
  //       "testii": "mchet mregla",
  //       "users": data
  //     }


  //   );





  // } catch (error) {
  //   res.status(500).json(error.message);

  // }

  try {
    // const { nom } = req.query;
    // if (!nom) {
    //   throw new Error("Veuillez fournir un nom pour la recherche.");
    // }

    const query = {};
    query["nom"] = { $regex: new RegExp(req.params.name, 'i') };
    const userList = await userModel.find(query);
    if (!userList) {
      throw new Error("User not found");
    }
    console.log(userList);
    res.status(200).json(userList);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}



module.exports.addClient = async (req, res, next) => {
  try {
    const { filename } = req.file;
    const { email, password } = req.body;
    if (!email) {
      return res.status(500).json({ message: "Email required" });
    }
    // if (!filename) {
    //   return res.status(500).json({ message: "filename required" });
    //}
    if (!prenom) {
      return res.status(500).json({ message: "password required" });
    }
    const user = new userModel({
      email,
      prenom,
      //image_user: filename      
    });
    const usersadded = await user.save();
    res.status(200).json(usersadded);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};