const completedPlanRouter = require("express").Router();
const CompletedPlanController = require("../controllers/completedPlan");

// app.get("/api/getCompletedplansByOwnerId/:attribute", );

completedPlanRouter.get("/api/getCompletedplansByOwnerId/:attribute", CompletedPlanController.getCompletedplansByOwnerId);
// app.post("/api/addCompletedPlan", )
completedPlanRouter.post("/api/addCompletedPlan", CompletedPlanController.addCompletedPlan);

// app.post("/api/addCompletedPlanNormal", )
completedPlanRouter.post("/api/addCompletedPlanNormal", CompletedPlanController.addCompletedPlanNormal);
// app.get("/api/getCompletedplans", )
completedPlanRouter.get("/api/getCompletedplans", CompletedPlanController.getCompletedplans);

module.exports = completedPlanRouter;