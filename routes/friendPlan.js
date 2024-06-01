const friendPlanRouter = require("express").Router();
const friendPlanController = require('../controllers/friendPlan');

// app.post("/api/addFriendplan", )
friendPlanRouter.post("/api/addFriendplan", friendPlanController.addFriendPlan)

// app.delete("/api/deleteFriendPlan/:id", )
friendPlanRouter.delete("/api/deleteFriendPlan/:id", friendPlanController.deleteFriendPlan)
// app.get("/api/getFriendplans", )
friendPlanRouter.get("/api/getFriendplans", friendPlanController.getAllFriendsPlans)
// app.get("/api/getFriendsPlansByOwnerId/:attribute", )
friendPlanRouter.get("/api/getFriendsPlansByOwnerId/:attribute", friendPlanController.getFriendPlanByOwnerId)
// app.put("/api/updateFriendPlan/:id", )

friendPlanRouter.put("/api/updateFriendPlan/:id", friendPlanController.updateFriendPlabById)


module.exports = friendPlanRouter;