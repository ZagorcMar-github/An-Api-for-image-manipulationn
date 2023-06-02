const router = require("express").Router();
const detectionController = require('../controller/objectDetectionController')
router.post('/detectPeople',detectionController.peopleDetector)
module.exports=router
