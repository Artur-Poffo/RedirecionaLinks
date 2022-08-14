const express = require("express")
const router = express.Router()
const linkController = require("../controllers/linkController")
const bodyParser = require("body-parser");

router.use(bodyParser.urlencoded({ extended: false }));

router.get("/", linkController.listAll);

router.get("/list/:title", linkController.redirect);

router.get("/NewLink", (req, res) => res.render("NewLink", { error: false }));
router.post("/NewLink", linkController.addLink)

router.get("/edit/:id", linkController.SelectLink);
router.post("/edit/:id", linkController.editLink);


router.delete("/:id", linkController.deleteLink)
router.delete("/", express.json() ,linkController.deleteLink);

module.exports = router