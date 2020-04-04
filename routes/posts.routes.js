var express = require("express");
var router = express.Router();
let controllers = require("../controllers");
/* GET home page. */
router.get("/", controllers.fetchAllPosts);
router.get("/:id", controllers.fetchPost);
router.post("/", controllers.createPost);
router.post("/:id", controllers.updatePost);

module.exports = router;
