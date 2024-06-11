const predefinedPlan = require('../models/predefinedPlan');
const Exercise = require("../models/exercise");

module.exports = {


    CreatepredefinedPlan: async (req, res) => {
        // let str = "Hello world how are you";
        //flutter send data in map only strings not lists so I end strings then I convert them to lists 
        let datafrombody = req.body;
        let thedata
        if ((typeof (datafrombody["exercises"]) == "string") && (typeof (datafrombody["nbrsSeries"]) == "string")) {
            let exercises = datafrombody["exercises"].split(",");
            let nbrsSeries = datafrombody["nbrsSeries"].split(",");
            thedata = {//ex1,ex2,ex3
                "planName": datafrombody["planName"],
                //"userId": datafrombody["userId"],
                "nbrExercises": datafrombody["nbrExercises"],
                "exercises": exercises,
                "nbrsSeries": nbrsSeries,
            };
        } else {
            thedata = req.body;
        }



        //Split the string into an array using space as the delimiter
        //let arr = str.split(' ');

        let data = predefinedPlan(thedata);
        console.log("Result", data);


        //let data = Plan(req.body);

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

    getAllpredefinedPlans: async (req, res) => {


        try {
            //find all product 
            let data = await predefinedPlan.find();
            //send response fl status ali n7b aliih bl message 
            //wela fichier json ali n7b 3leha najm nasna3eha eni
            res.status(200).send(
                {
                    "plans": data
                }

            );

        } catch (error) {
            res.status(500).json(error.message);

        }


    },


    getExericisesByPlan: async (req, res) => {

        try {
            //find all product 
            // let data = await User.findById(req.params.attribute);
            const query = {};
            //query["bodyPart"] = req.params.attribute;
            query["planName"] = req.params.attribute;
            //let data = await Exercise.find(query);

            let data = await predefinedPlan.find(query);
            //console.log(data);
            let ex = data[0].exercises
            //console.log(ex);
            let theExercises = [];
            let qq = {};
            for (let i = 0; i < ex.length; i++) {
                qq["name"] = ex[i];
                let exs = await Exercise.find(qq);

                theExercises.push(exs[0]);
            }
            //console.log(`planName : ${req.params.attribute}`);
            //console.log(theExercises);

            //send response fl status ali n7b aliih bl message 
            //wela fichier json ali n7b 3leha najm nasna3eha eni
            res.status(200).json(
                {
                    "testii": "mchet mregla",
                    "exercises": theExercises
                }


            );





        } catch (error) {
            res.status(500).json(error.message);

        }


    },
}