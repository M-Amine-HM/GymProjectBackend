var express = require('express');
var router = express.Router();
const clientDetails = require("../controllers/clientDetails");


router.get('/',clientDetails.getClient)
// router.get('/total',clientDetails.getTotal)
router.post('/',clientDetails.addClient)
router.put('/:id',clientDetails.update)

module.exports = router