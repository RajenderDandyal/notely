var express = require("express");
var router = express.Router();
let controllers = require("../controllers");
/* GET home page. */
router.get("/", controllers.fetchAllComments);
router.get("/:id", controllers.fetchComment);
router.post("/", controllers.createComment);
router.post("/:id", controllers.updateComment);

module.exports = router;
