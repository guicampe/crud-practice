const express = require("express");
const router = express.Router();
const { authenticate, authorize } = require("../middlewares/authMiddleware");

router.get("/grades", authenticate, authorize("admin"));
router.get("/grades/me", authenticate);

router.post("/grades/:userId", authenticate, authorize("admin"));

router.put("/grades/:userId", authenticate, authorize("admin"));

module.exports = router;