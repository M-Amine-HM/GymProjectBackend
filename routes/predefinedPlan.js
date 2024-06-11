const predefinedPlanRouter = require("express").Router();
const predefinedPlanController = require('../controllers/predefinedPlan');

predefinedPlanRouter.get("/api/getpredefinedPlans", predefinedPlanController.getAllpredefinedPlans);

predefinedPlanRouter.get("/api/getExercicesBypredefinedPlans/:attribute", predefinedPlanController.getExericisesByPlan);

predefinedPlanRouter.post("/api/addpredefinedPlan", predefinedPlanController.CreatepredefinedPlan);

module.exports = predefinedPlanRouter;