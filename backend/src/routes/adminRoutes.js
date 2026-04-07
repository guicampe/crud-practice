const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const gradesController = require("../controllers/gradesController");
const subjectsController = require("../controllers/subjectsController");
const { authenticate, authorize } = require("../middlewares/authMiddleware");

router.get("/subjects", authenticate, authorize("admin"), subjectsController.getAllSubjects);
router.get("/grades/:userId", authenticate, authorize("admin"), gradesController.getGradesById);
router.get("/:id", authenticate, authorize("admin"), userController.getUserById);

module.exports = router;