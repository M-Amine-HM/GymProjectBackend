const userRouter = require("express").Router();
const userController = require('../controllers/user');


//post for user 
// app.post("/api/add_user", )
userRouter.post("/api/add_user", userController.createUser);

// app.get("/api/get_users", )
userRouter.get("/api/get_users", userController.getUsers);
//get by id 
//get api
// app.get("/api/get_user/:_id", )
userRouter.get("/api/get_user/:_id", userController.getUserById);

//find by other email (other than _id)
// app.get("/api/get_user_byEmail/:attribute", );
userRouter.get("/api/get_user_byEmail/:attribute", userController.getUserByEmail);


// app.get("/api/get_users_byName/:attribute", );
userRouter.get("/api/get_users_byName/:attribute", userController.getUsersByName);

//update

//all product  => put 
// only one attribut => patch 

// app.put("/api/update/:id", )

userRouter.put("/api/update/:id", userController.updateUserById);
//delete

// app.delete("/api/deleteUser/:id", )
userRouter.delete("/api/deleteUser/:id", userController.deleteUserById);

module.exports = userRouter;