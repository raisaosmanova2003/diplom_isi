// const { Books } = require("../models/Book.model")

// const booksController = {
//     getAll: async (req, res) => {
//         try {
//             const items = await Books.find()
//             // .populate("category")
//             res.send(items)
//         } catch (error) {
//             res.status(404).json({ message: error })
//         }
//     },
//     getById: async (req, res) => {
//         try {
//             const { id } = req.params
//             const item = await Books.findById(id)
//             res.send(item)
//         } catch (error) {
//             res.status(404).send(error)
//         }
//     },
//     add: async (req, res) => {
//         try {
//             const newbooks = new Books({ ...req.body,image:req.file.filename })
//             await newbooks.save()
//             res.send('books created')
//         } catch (error) {
//             res.status(404).json({ message: error })
//         }
//     },
//     delete: async (req, res) => {
//         try {
//             const { id } = req.params
//             const findBooks = await Books.findByIdAndDelete(id)
//             // const items = await Books.find()
//             res.send(findBooks)
//         } catch (error) {
//             res.status(404).send(error)
//         }
//     },
//     edit: async (req, res) => {
//         try {
//             const { id } = req.params
//             await Books.findByIdAndUpdate(id, { ...req.body })
//             const items = await Books.find()
//             res.send(items)
//         } catch (error) {
//             res.status(404).send(error)
//         }
//     }
// }
// module.exports = { booksController }


const { Books } = require("../models/Book.model");

const booksController = {
  getAll: async (req, res) => {
    try {
      const items = await Books.find();
      res.send(items);
    } catch (error) {
      res.status(404).json({ message: error });
    }
  },
  getById: async (req, res) => {
    try {
      const { id } = req.params;
      const item = await Books.findById(id);
      res.send(item);
    } catch (error) {
      res.status(404).send(error);
    }
  },
  add: async (req, res) => {
    try {
      const newBooks = new Books({
        ...req.body,
        image: req.file ? req.file.filename : req.body.image,
      });
      await newBooks.save();
      res.send('Book created');
    } catch (error) {
      res.status(404).json({ message: error });
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const findBooks = await Books.findByIdAndDelete(id);
      res.send(findBooks);
    } catch (error) {
      res.status(404).send(error);
    }
  },
  edit: async (req, res) => {
    try {
      const { id } = req.params;
      await Books.findByIdAndUpdate(id, { ...req.body });
      const items = await Books.find();
      res.send(items);
    } catch (error) {
      res.status(404).send(error);
    }
  }
};

module.exports = { booksController };