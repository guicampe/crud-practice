const express = require("express");
const router = express.Router();
const { authenticate, authorize } = require("../middlewares/authMiddleware");
const gradesController = require("../controllers/gradesController");

router.get("/grades", authenticate, authorize("admin"), gradesController.getAllGrades);
router.get("/grades/me", authenticate, gradesController.getMyGrades);

router.post("/grades/:userId", authenticate, authorize("admin"), gradesController.createGrades);

router.patch("/grades/:userId", authenticate, authorize("admin"), gradesController.updateGrades);

module.exports = router;