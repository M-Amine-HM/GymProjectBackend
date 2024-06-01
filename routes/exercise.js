const exerciseRouter = require("express").Router();
const exerciseController = require('../controllers/exercise');

// app.get("/api/get_exercises", )
exerciseRouter.get("/api/get_exercises", exerciseController.getAllExercises);


// app.get("/api/getExercisesByBodyPart/:attribute", );
exerciseRouter.get("/api/getExercisesByBodyPart/:attribute", exerciseController.getExercisesByBodyPart)
// app.get("/api/getExercisesByPlan/:attribute", );
//exerciseRouter.get // mawjouda fl plan
// app.get("/api/getExercisesByName/:attribute", );

exerciseRouter.get("/api/getExercisesByName/:attribute", exerciseController.getExercisesByName);

// app.post("/api/add_exercise", )
exerciseRouter.post("/api/add_exercise", exerciseController.addExercise);

module.exports = exerciseRouter;