
const { category } = require("../models/Category.model")

const categoryController = {
    getAll: async (req, res) => {
        try {
            const items = await category.find()
            res.send(items)
        } catch (error) {
            res.status(404).send(error)
        }
    },
    getById: async (req, res) => {
        try {
            const { id } = req.params
            const item = await category.findById(id)
            res.send(item)
        } catch (error) {
            res.status(404).send(error)
        }
    },
    add: async (req, res) => {
        try {
            const newcategory = new category({ ...req.body })
            await newcategory.save()
            res.send(newcategory)
        } catch (error) {
            res.status(404).send(error)
        }
    },
    delete: async (req, res) => {
        try {
            const { id } = req.params
            await category.findByIdAndDelete(id)
            const items = await category.find()
            res.send(items)
        } catch (error) {
            res.status(404).send(error)
        }
    },
    edit: async (req, res) => {
        try {
            const { id } = req.params
            await category.findByIdAndUpdate(id, { ...req.body })
            const items = await Books.find()
            res.send(items)
        } catch (error) {
            res.status(404).send(error)
        }
    }
}
module.exports = { categoryController }