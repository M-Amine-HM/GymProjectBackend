var express = require('express');
var router = express.Router();
const revenue = require("../controllers/revenue");

/* GET revenue. */
router.get('/',revenue.getRevenue)



/* POST revenue. */
router.post('/',revenue.addRevenue) 

// /* GETBYDATE revenue. */
// router.get('/:date',revenue.getByDate)

/* UPDATE revenue. */
router.put('/:id',revenue.updateRevenue)

module.exports = router
