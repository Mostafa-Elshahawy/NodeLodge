const express = require("express");
const userControllers = require("../Controllers/userControllers");
const authControllers = require("../Controllers/authConttollers");

const router = express.Router();

router.post("/signup", userControllers.signup);
router.post("/login", userControllers.login);
router.post("/logout", userControllers.logout);

// router.use(authControllers.restrictTo("admin"));

// router
//   .route("/")
//   .get(userControllers.getAllUsers)
//   .post(userControllers.createUser);

// router
//   .route("/:id")
//   .get(userControllers.getUser)
//   .patch(userControllers.updateUser)
//   .delete(userControllers.deleteUser);
module.exports = router;
