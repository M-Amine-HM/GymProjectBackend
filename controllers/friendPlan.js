const FriendPlan = require("../models/friendPlan");

module.exports = {

    addFriendPlan: async (req, res) => {
        // let str = "Hello world how are you";
        //flutter send data in map only strings not lists so I end strings then I convert them to lists 
        let datafrombody = req.body;
        let thedata
        if ((typeof (datafrombody["exercises"]) == "string") && (typeof (datafrombody["nbrsSeries"]) == "string")) {
            let exercises = datafrombody["exercises"].split(",");
            let nbrsSeries = datafrombody["nbrsSeries"].split(",");
            thedata = {//ex1,ex2,ex3
                "planName": datafrombody["planName"],
                "userId": datafrombody["userId"],
                "planFrom": datafrombody["planFrom"],
                "nbrExercises": datafrombody["nbrExercises"],
                "exercises": exercises,
                "nbrsSeries": nbrsSeries,

            };
        } else {
            thedata = req.body;
        }



        //Split the string into an array using space as the delimiter
        //let arr = str.split(' ');

        let data = FriendPlan(thedata);
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

    deleteFriendPlan: async (req, res) => {


        try {

            let data = await FriendPlan.findByIdAndDelete(req.params.id);
            // lfonction hadhi t returni l data ali deleted
            console.log(data);
            res.status(200).send(data);
        } catch (error) {
            res.status(500).send(error.message);
        }



    },
    getAllFriendsPlans: async (req, res) => {


        try {
            //find all product 
            let data = await FriendPlan.find();
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


    getFriendPlanByOwnerId: async (req, res) => {


        try {
            const query = {};
            query["userId"] = req.params.attribute;

            let data = await FriendPlan.find(query);
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


    updateFriendPlabById: async (req, res) => {



        let datafrombody = req.body;
        let thedata
        if ((typeof (datafrombody["exercises"]) == "string") && (typeof (datafrombody["nbrsSeries"]) == "string")) {
            let exercises = datafrombody["exercises"].split(",");
            let nbrsSeries = datafrombody["nbrsSeries"].split(",");
            thedata = {//ex1,ex2,ex3
                "planName": datafrombody["planName"],
                //"nbrExercises": datafrombody["nbrExercises"],
                "exercises": exercises,
                "nbrsSeries": nbrsSeries,
            };
        } else {
            thedata = req.body;
        }



        //Split the string into an array using space as the delimiter
        //let arr = str.split(' ');

        let data = Plan(thedata);
        console.log("Result", data);


        let id = req.params.id;
        //let updatedData = req.body;
        let updatedData = thedata;
        let options = { new: true };
        try {


            let data = await FriendPlan.findByIdAndUpdate(id, updatedData, options);
            //res.status(200).send(data);
            console.log(data);

            res.status(200).json(
                {
                    "testii": "mchet mregla",
                    "plan": data
                }


            );

        } catch (error) {
            res.send(error.message);
        }


    },

}