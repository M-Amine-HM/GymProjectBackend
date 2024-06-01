const User = require("../models/user");

module.exports = {

    createUser: async (req, res) => {
        console.log("Result", req.body);


        let data = User(req.body);

        try {

            let dataToStore = await data.save();

            //l reponse ali n7bha tetb3ath bl status ali n7bou send response 
            res.status(200).send(dataToStore);

        } catch (error) {
            res.status(400).json(
                {
                    'status': error.message
                }
            );

        }


    },

    getUsers: async (req, res) => {


        try {
            //find all product 
            let data = await User.find();
            //send response fl status ali n7b aliih bl message 
            //wela fichier json ali n7b 3leha najm nasna3eha eni
            res.status(200).send(
                {
                    "users": data
                }

            );

        } catch (error) {
            res.status(500).json(error.message);

        }


    },

    getUserById: async (req, res) => {

        try {
            //find all product 
            let data = await User.findById(req.params._id);
            //send response fl status ali n7b aliih bl message 
            //wela fichier json ali n7b 3leha najm nasna3eha eni
            res.status(200).json(
                {
                    "testii": "mchet mregla",
                    "user": data
                }


            );


        } catch (error) {
            res.status(500).json(error.message);

        }


    },

    getUserByEmail: async (req, res) => {

        try {
            //find all product 
            // let data = await User.findById(req.params.attribute);
            const query = {};
            query["email"] = req.params.attribute;

            let data = await User.find(query);
            //send response fl status ali n7b aliih bl message 
            //wela fichier json ali n7b 3leha najm nasna3eha eni
            res.status(200).json(
                {
                    "testii": "mchet mregla",
                    "user": data
                }


            );





        } catch (error) {
            res.status(500).json(error.message);

        }


    },

    getUsersByName: async (req, res) => {

        try {
            let data;
            //find all product 
            // let data = await User.findById(req.params.attribute);
            // const query = {};
            // query["name"] = req.params.attribute;

            const query = {};
            query["name"] = { $regex: new RegExp(req.params.attribute, 'i') };
            data = await User.find(query);
            // if (req.params.attribute !== "") {
            //     const query = {};
            //     query["name"] = { $regex: new RegExp(req.params.attribute, 'i') };
            //     data = await User.find(query);
            // }
            // else {
            //     data = await User.find();
            // }

            //send response fl status ali n7b aliih bl message 
            //wela fichier json ali n7b 3leha najm nasna3eha eni
            res.status(200).json(
                {
                    "testii": "mchet mregla",
                    "users": data
                }


            );





        } catch (error) {
            res.status(500).json(error.message);

        }


    },

    updateUserById: async (req, res) => {



        let id = req.params.id;
        let updatedData = req.body;
        let options = { new: true };
        try {


            let data = await User.findByIdAndUpdate(id, updatedData, options);
            res.status(200).send(data);
            console.log(data);

        } catch (error) {
            res.send(error.message);
        }


    },
    deleteUserById: async (req, res) => {


        try {

            let data = await User.findByIdAndDelete(req.params.id);
            // lfonction hadhi t returni l data ali deleted
            res.status(200).send(data);
        } catch (error) {
            res.status(500).send(error.message);
        }



    },


}