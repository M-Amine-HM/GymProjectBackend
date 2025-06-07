const express = require("express")

const mongoose = require('mongoose');
const app = express();
const User = require("./models/user");
const usersSubscribed = require("./models/userSubscribed");
const multer = require("multer");
const path = require("path");
const Exercise = require("./models/exercise");
const Plan = require("./models/plan");
const FriendPlan = require("./models/friendPlan");
const CompletedPlan = require("./models/completedPlan");

//storage engine to read data from binary form and write it to png
const storage = multer.diskStorage({
    //for users profile image
    destination: "./upload/images",
    //for exercises
    //destination: "./upload/exercises",
    //TODO: ya9ra kan jpg w png photos
    filename: (req, file, callback) => {
        return callback(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }

})


const upload = multer({
    //to automatically create this folder
    storage: storage,
    //najm na3ml filter bch ne9bl kan type ali n7b alih sinon ay type 
    //fama limits l file size kan fat size neb3ahthlou error ylzem na3ml error handler
    //limits: { fileSize: 10000000 }
})
// const bodyParser = require('body-parser');
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//     extended: true
// }));

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

// r plan
const PlanRouter = require('./routes/plan');
app.use('/', PlanRouter);

const predefinedPlanRouter = require('./routes/predefinedPlan');
app.use('/', predefinedPlanRouter);
//r cp
const completedPlanRouter = require('./routes/completedPlan');
app.use('/', completedPlanRouter);
// user
const userRouter = require('./routes/user');
app.use('/', userRouter);

//exercise 

const exerciseRouter = require('./routes/exercise');
app.use('/', exerciseRouter);

//friend
const friendPlanRouter = require('./routes/friendPlan');
app.use('/', friendPlanRouter);

const userSubscribedRouter = require('./routes/userSubscribed');
app.use('/', userSubscribedRouter);

//nidhal
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var clientRouter = require('./routes/Client');
var calandarRouter = require('./routes/calandar');
var toDoRouter = require('./routes/toDo');
var revenueRouter = require('./routes/revenue');


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/client', clientRouter);
app.use('/Calandar', calandarRouter);
app.use('/toDo', toDoRouter);
app.use('/revenue', revenueRouter);



//const methodOverride = require("method-override");
//app.use(methodOverride("_method", { methods: ["POST", "GET"] }));

//connsect ro mongoose
mongoose.connect('mongodb://localhost:27017/GymApp');







//app.use(express.json());


//bch iraka7 l response lil user bch user bl ui inajem yacssidi lil images 
//expose the folder 
//acces using the profile 
//the folder will send the static content 
//ki nest3aml endpoint api/profile emchili lil content ali fl upload/images
app.use("/api/profile", express.static("upload/images"));

app.use("/api/exercise", express.static("upload/exercises"));

//post lil images 
//single=> 1 image 
//profile : name what you want take from the user
app.post("/api/uploadImage", upload.single("profile"), (req, res) => {
    //console.log(req.file);
    //response mohema 5atr bch yest3amlha l client fl ui mta3ou 

    try {


        res.status(200).json({
            success: 1,
            profile_url_pc: `http://localhost:2000/api/profile/${req.file.filename}`,
            //profile_url_mobile: `http://192.168.1.12:2000/api/profile/${req.file.filename}`
            profile_url_mobile: req.file.filename
        })


    } catch (err) {

        res.send(err.message);
    }



})

app.post("/api/uploadExercise", upload.single("exercise"), (req, res) => {
    //console.log(req.file);
    //response mohema 5atr bch yest3amlha l client fl ui mta3ou 

    try {


        res.status(200).json({
            success: 1,
            profile_url_pc: `http://localhost:2000/api/exercise/${req.file.filename}`,
            profile_url_mobile: req.file.filename
        })


    } catch (err) {

        res.send(err.message);
    }



})

function errHandler(err, req, res, next) {
    if (err) {
        res.json({
            sucess: 0,
            message: err.message
        })
    }
}

app.use(errHandler);


app.get("/api/getverficationcode/:attribute", async (req, res) => {

    try {
        //const query = {};
        //query["bodyPart"] = req.params.attribute;
        var theEmail = req.params.attribute;
        function generateRandomNumber(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        const verificationCode = generateRandomNumber(1000, 9999);
        var nodemailer = require('nodemailer');
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'aminos5110@gmail.com',
                pass: 'tsvi ubli ivki enbw'
            }
        });

        var mailOptions = {
            from: 'aminos5110@gmail.com',
            to: theEmail,
            subject: 'Code de vérification du GYM APP ',

            text: `Votre code de vérification est : ${verificationCode}`
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
        res.status(200).json(
            {

                "code": verificationCode
            }


        );

    } catch (error) {
        res.status(500).json(error.message);

    }


},)

//post for user 
// app.post("/api/add_user", )

//post for Exercice 
// app.post("/api/add_exercise", )


//post for plan 
// app.post("/api/add_plan", );



//post for plan 
// app.post("/api/addFriendplan", )


//delete plan

// app.delete("/api/deletePlan/:id", )


// app.delete("/api/deleteFriendPlan/:id", )


//get plans
// app.get("/api/get_plans", )

// app.get("/api/getFriendplans", )


//get plans by owner id
// app.get("/api/get_plansByOwnerId/:attribute", )


//get plans by owner id
// app.get("/api/getFriendsPlansByOwnerId/:attribute", )


//get plans by owner id
// app.get("/api/getCompletedplansByOwnerId/:attribute", );

//GET exercise by name of the body part

// app.get("/api/get_plan_byName/:attribute", );


// app.get("/api/get_plan_byOwner/:attribute", );


// app.put("/api/updatePlan/:id", )


// app.put("/api/updateFriendPlan/:id", )


//get api
// app.get("/api/get_users", )

//get by id 
//get api
// app.get("/api/get_user/:_id", )


//find by other email (other than _id)
// app.get("/api/get_user_byEmail/:attribute", );

// get all exercises
// app.get("/api/get_exercises", )

//GET exercise by name of the body part

// app.get("/api/getExercisesByBodyPart/:attribute", );



//GET exercise by its plan

// app.get("/api/getExercisesByPlan/:attribute", );


//GET exercise by name

// app.get("/api/getExercisesByName/:attribute", );


// app.get("/api/get_users_byName/:attribute", );

//update

//all product  => put 
// only one attribut => patch 

// app.put("/api/update/:id", )


//delete

// app.delete("/api/deleteUser/:id", )


// app.post("/api/addCompletedPlan", )

// app.post("/api/addCompletedPlanNormal", )

// app.get("/api/getCompletedplans", )
const ipAdress = "192.168.81.218";

const server = app.listen(2000, () => {

    console.log("connected on port 2000")
})


const io = require('socket.io')(server, {
    pingInterval: 25000, // Interval in ms to send a ping packet to the client
    pingTimeout: 60000,  // Time in ms to wait for a ping response before closing the connection
    cors: {
        origin: "*", // Allow all origins, adjust as needed
        methods: ["GET", "POST"]
    }
});

io.on('connection', (socket) => {
    console.log('Connected successfully', socket.id);

    socket.on('disconnect', (reason) => {
        console.log('Disconnected', socket.id, 'Reason:', reason);
    });

    socket.on('message', (data) => {
        console.log('Message received:', data);
        socket.broadcast.emit('message-receive', data);
    });
});


