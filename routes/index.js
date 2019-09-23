const path = require("path");
const router = require('express').Router();
const controller = require('../controllers/groupdiscountController');

// router.route("/").post(controller.save);
router.route("/create").post(controller.save);
router.route("/addUser").post(controller.saveNewUser);
router.route("/close/:groupId").get(controller.closeActiveGroup);
router.route("/allManager").get(controller.findAll);
router.route("/:groupId").get(controller.findOne);

router.use(function (req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;