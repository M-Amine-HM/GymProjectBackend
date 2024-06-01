const CompletedPlan = require("../models/completedPlan");


module.exports = {

    getCompletedplansByOwnerId: async (req, res) => {


        try {
            const query = {};
            query["userId"] = req.params.attribute;

            let data = await CompletedPlan.find(query);
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
    addCompletedPlan: async (req, res) => {
        console.log("Result", req.body);


        // let str = "Hello world how are you";
        //flutter send data in map only strings not lists so I end strings then I convert them to lists 
        let datafrombody = req.body;
        let thedata
        if ((typeof (datafrombody["exercises"]) == "string") && (typeof (datafrombody["nbrsSeries"]) == "string")) {
            let exercises = datafrombody["exercises"].split(",");
            let nbrsSeries = datafrombody["nbrsSeries"].split(",");
            let ex = datafrombody["seriesCompleted"].split(";");
            console.log(ex);
            let ser = [];
            for (var i = 0; i < (ex.length); i++) {
                //ser = ser.concat(ex[i].split(","));
                let w = ex[i].split(",");
                ser.push(w);
            };
            console.log(ser);
            let weightAndRep = [];
            let x = [];
            let y = []
            for (var i = 0; i < (ser.length); i++) {
                for (var j = 0; j < (ser[i].length); j++) {

                    let w = ser[i][j].split("*");
                    x.push(w);
                    //(weightAndRep[i]).push(w);
                };
                weightAndRep.push(x)
                x = [];
                //(weightAndRep[i]).push(x);
                // x.push(weightAndRep);
            };
            //weightAndRep.push(x)
            console.log(weightAndRep);
            console.log(x);

            thedata = {//ex1,ex2,ex3
                "planName": datafrombody["planName"],
                "time": datafrombody["time"],
                "userId": datafrombody["userId"],
                "currentTime": datafrombody["currentTime"],
                "nbrExercises": datafrombody["nbrExercises"],
                "exercises": exercises,
                "nbrsSeries": nbrsSeries,
                "seriesCompleted": weightAndRep
            };
        } else {
            thedata = req.body;
        }



        //Split the string into an array using space as the delimiter
        //let arr = str.split(' ');

        let data = CompletedPlan(thedata);
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
    addCompletedPlanNormal: async (req, res) => {
        console.log("Result", req.body);


        let data = CompletedPlan(req.body);

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
    getCompletedplans: async (req, res) => {

        try {
            //find all product 
            let data = await CompletedPlan.find();
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


}