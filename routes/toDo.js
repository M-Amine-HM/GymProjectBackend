var express = require('express');
var router = express.Router();
const toDoController = require("../controllers/toDoController");

router.get('/',toDoController.getToDo)

router.post('/',toDoController.addToDo)
router.put('/:id',toDoController.updateToDo)
router.delete('/:id',toDoController.deleteToDo)


module.exports = router