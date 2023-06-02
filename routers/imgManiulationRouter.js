const router = require("express").Router();
const manipulationController = require('../controller/imgManipulationController')
router.post('/User/Manipulation/resize',manipulationController.resizeImg)
router.post('/User/Manipulation/applyTint',manipulationController.applyTint)
router.post('/User/Manipulation/getMetadata',manipulationController.getMetadataImg)
module.exports=router
