const express = require("express");
const router = express.Router();
const { authenticate, authorize } = require("../middlewares/authMiddleware");

router.get("/", authenticate, authorize("admin"));
router.get("/me", authenticate);

router.post("/", authenticate, authorize("admin"));

router.put("/:id", authenticate, authorize("admin"));

router.delete("/:id", authenticate, authorize("admin"));

module.exports = router;