const express = require("express");
const router = express.Router();
const { authenticate, authorize } = require("../middlewares/authMiddleware");
const subjectsController = require("../controllers/subjectsController");

router.get("/", authenticate, authorize("admin"), subjectsController.getAllSubjects);
router.get("/me", authenticate, subjectsController.getMySubjects);

router.post("/", authenticate, authorize("admin"), subjectsController.createSubject);

router.put("/:id", authenticate, authorize("admin"), subjectsController.updateSubject);

router.delete("/:id", authenticate, authorize("admin"), subjectsController.deleteSubject);

module.exports = router;