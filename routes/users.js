var express = require('express');
var router = express.Router();
const auth = require("../controllers/auth");
const apload = require("../middlewares/aploadFile");


/* GET users listing. */
router.get('/', auth.getUsers)

/* SEARCH users listing. */
router.get('/searchUsersByName/:name', auth.searchUsersByName)

/* GET_BY_ID users listing. */
// router.get('/:id',auth.getUserById)

/* POST users listing. */
router.post('/', apload.single("image_user"), auth.addUser)

/* POST client listing. */
router.post('/addClient', apload.single("image_user"), auth.addClient)

/* PUT users listing. */
router.put('/:id', auth.apdate)

/* COUNT users listing. */
router.get('/count', auth.countUsers)

/* DELETE users listing. */
router.delete('/:id', auth.delete)



module.exports = router
