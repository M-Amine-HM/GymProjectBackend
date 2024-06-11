const usersSubscribed = require("../models/userSubscribed");

module.exports = {

    createUserSubscribed: async (req, res) => {
        console.log("Result", req.body);


        //let data = usersSubscribed(req.body);



        let datafrombody = req.body;
        let thedata
        if ((typeof (datafrombody["entries"]) == "string") && (typeof (datafrombody["exits"]) == "string")) {
            let entries = datafrombody["entries"].split(",");
            let exits = datafrombody["exits"].split(",");
            thedata = {//ex1,ex2,ex3
                "email": datafrombody["email"],
                "userId": datafrombody["planName"],
                "gymName": datafrombody["planName"],
                "subscription": datafrombody["planName"],
                "daysLeft": datafrombody["planName"],
                "entries": entries,
                "exits": exits,
            };
        } else {
            thedata = req.body;
        }

        try {
            let data = usersSubscribed(thedata);
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

    getUserSubscribedById: async (req, res) => {

        try {
            //find all product 
            // let data = await User.findById(req.params.attribute);
            const query = {};
            query["userId"] = req.params.attribute;

            let data = await usersSubscribed.find(query);
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

    updateUserSubscribedById: async (req, res) => {



        let id = req.params.id;
        let updatedData = req.body;
        let options = { new: true };
        try {


            let data = await usersSubscribed.findByIdAndUpdate(id, updatedData, options);
            res.status(200).send(data);
            console.log(data);

        } catch (error) {
            res.send(error.message);
        }


    },


}