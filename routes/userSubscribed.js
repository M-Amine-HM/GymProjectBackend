const userSubscribedRouter = require("express").Router();
const userSubscribedController = require('../controllers/userSubscribed');

userSubscribedRouter.post("/api/addUserSubscribed", userSubscribedController.createUserSubscribed);
userSubscribedRouter.get("/api/getUserSubscribedById/:attribute", userSubscribedController.getUserSubscribedById);
userSubscribedRouter.put("/api/updateUserSubscribed/:id", userSubscribedController.updateUserSubscribedById);

module.exports = userSubscribedRouter;
