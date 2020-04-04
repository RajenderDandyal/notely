var express = require("express");
var router = express.Router();
let controllers = require("../controllers");
/* GET home page. */
router.get("/", controllers.getAllUsers);
router.get("/:id", controllers.getUser);
router.post("/", controllers.createUser);
router.post("/:id", controllers.updateUser);

module.exports = router;
