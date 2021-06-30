const {Router} = require("express");
const router = Router();
const homeController = require("./controllers/homeController");


router.get("/get/:prop",homeController.get);
router.post("/set",homeController.set);


module.exports = router;