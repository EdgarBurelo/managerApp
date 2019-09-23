const path = require("path");
const router = require('express').Router();
const controller = require('../controllers/groupdiscountController');

// router.route("/").post(controller.save);
router.route("/create").post(controller.save);
router.route("/allManager").get(controller.findAll);

router.use(function (req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;