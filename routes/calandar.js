var express = require('express');
var router = express.Router();
const calandarController = require("../controllers/calandarController");

router.get('/',calandarController.getCalandar)
router.get('/:attribute',calandarController.getCalandarByDate)
router.post('/',calandarController.addCalandar)
router.put('/:id',calandarController.updateCalandar)
router.delete('/:id',calandarController.deleteCalandar)


module.exports = router