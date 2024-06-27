const express = require("express")
const { categoryController } = require("../controllers/Category.controller")
const { upload } = require("../middlewares/multer")
const router = express.Router()

router.get("/", categoryController.getAll)
router.get("/:id", categoryController.getById)
router.post("/",upload.single('image'), categoryController.add)
router.delete("/:id", categoryController.delete)
router.put("/:id", categoryController.edit)

module.exports = router