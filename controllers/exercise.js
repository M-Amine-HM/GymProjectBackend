const Exercise = require("../models/exercise");

module.exports = {

    addExercise: async (req, res) => {
        console.log("Result", req.body);


        let data = Exercise(req.body);

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

    getAllExercises: async (req, res) => {


        try {
            //find all product 
            let data = await Exercise.find();
            //send response fl status ali n7b aliih bl message 
            //wela fichier json ali n7b 3leha najm nasna3eha eni
            res.status(200).send(
                {
                    "exercises": data
                }

            );

        } catch (error) {
            res.status(500).json(error.message);

        }


    },

    getExercisesByBodyPart: async (req, res) => {

        try {
            //find all product 
            // let data = await User.findById(req.params.attribute);
            const query = {};
            query["bodyPart"] = req.params.attribute;

            let data = await Exercise.find(query);
            //send response fl status ali n7b aliih bl message 
            //wela fichier json ali n7b 3leha najm nasna3eha eni
            res.status(200).json(
                {
                    "testii": "mchet mregla",
                    "exercises": data
                }


            );





        } catch (error) {
            res.status(500).json(error.message);

        }


    },
    getExercisesByName: async (req, res) => {

        try {
            //find all product 
            // let data = await User.findById(req.params.attribute);
            const query = {};
            query["name"] = { $regex: new RegExp(req.params.attribute, 'i') };

            let data = await Exercise.find(query);
            //send response fl status ali n7b aliih bl message 
            //wela fichier json ali n7b 3leha najm nasna3eha eni
            res.status(200).json(
                {
                    "testii": "mchet mregla",
                    "exercises": data
                }


            );





        } catch (error) {
            res.status(500).json(error.message);

        }


    },

}