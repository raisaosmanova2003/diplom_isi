
// const express = require("express")
// const { booksController } = require("../controllers/Book.controller")
// const { upload } = require("../middlewares/multer.js")
// const router = express.Router()

// router.get("/", booksController.getAll)
// router.get("/:id", booksController.getById)
// router.post("/",upload.single('image'), booksController.add)
// router.delete("/:id", booksController.delete)
// router.put("/:id", booksController.edit)

// module.exports = router

const express = require("express");
const { booksController } = require("../controllers/Book.controller");
const multer = require("multer");
const upload = multer({ dest: 'uploads/' }); 

const router = express.Router();

router.get("/", booksController.getAll);
router.get("/:id", booksController.getById);
router.post("/", upload.single('image'), booksController.add); 
router.delete("/:id", booksController.delete);
router.put("/:id", booksController.edit);

module.exports = router;