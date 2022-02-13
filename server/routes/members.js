const express = require("express");
const router = express.Router();
const membersController = require("../controllers/members");

//Get every members
router.get('/', membersController.getMembers);

//Create a meber
router.post('/create', membersController.createMember)

module.exports = router;