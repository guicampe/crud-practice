const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const { authenticate, authorize } = require("../middlewares/authMiddleware");
const { validateUpdate } = require("../middlewares/validateMiddleware");
const { authorizeOwner } = require("../middlewares/authorizeOwner");

router.get("/", authenticate, authorize("admin"), userController.getAllUsers);
router.get("/:id", authenticate, userController.getUserById);

router.put("/:id", authenticate, authorizeOwner, validateUpdate, userController.updateUser);

router.delete("/:id", authenticate, authorize("admin"), userController.deleteUser);

module.exports = router;