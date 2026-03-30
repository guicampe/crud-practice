const express = require("express");
const router = express.Router();
const { authenticate, authorize } = require("../middlewares/authMiddleware");
const gradesController = require("../controllers/gradesController");

router.get("/", authenticate, authorize("admin"), gradesController.getAllGrades);
router.get("/me", authenticate, gradesController.getMyGrades);
router.get("/:userId", authenticate, authorize("admin"));

router.post("/:userId/:subject", authenticate, authorize("admin"));

router.patch("/:userId/:subjectId",  authenticate, authorize("admin"));

router.delete("/:userId/:subjectId", authenticate, authorize("admin"));

module.exports = router;