const planRouter = require("express").Router();
const PlanController = require('../controllers/plan');


// app.post("/api/add_plan", );
planRouter.post("/api/add_plan", PlanController.CreatePlan);
// app.delete("/api/deletePlan/:id", )
planRouter.delete("/api/deletePlan/:id", PlanController.deletePlan);
// app.get("/api/get_plans", )
planRouter.get("/api/get_plans", PlanController.getAllPlans);
//get plans by owner id
// app.get("/api/get_plansByOwnerId/:attribute", )
planRouter.get("/api/get_plansByOwnerId/:attribute", PlanController.getPlansByOwnerId);
// app.get("/api/get_plan_byName/:attribute", );
planRouter.get("/api/get_plan_byName/:attribute", PlanController.getPlanByName);
// app.get("/api/get_plan_byOwner/:attribute", );
planRouter.get("/api/get_plan_byOwner/:attribute", PlanController.getPlanByOwner);
// app.put("/api/updatePlan/:id", )

planRouter.put("/api/updatePlan/:id", PlanController.UpdatePlan);

// app.get("/api/getExercisesByPlan/:attribute", );
planRouter.get("/api/getExercisesByPlan/:attribute", PlanController.getExericisesByPlan);


module.exports = planRouter

