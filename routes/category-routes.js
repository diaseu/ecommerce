const router = require('express').Router()
const { Category, Product } = require('../models')

// The `/api/categories` endpoint

// find all categories
// be sure to include its associated Products
router.get('/categories', (req, res) => Category.findAll()
  .then(categories => res.json(categories))
  .catch(err => console.log(err)))

// find one category by its `id` value
// be sure to include its associated Products
router.get('/categories/:id', (req, res) => Category.findOne({ where: { id: req.params.id } })
  .then(category => res.json(category))
  .catch(err => console.log(err)))

  // create a new category
router.post('/categories', (req, res) => Category.create(req.body)
  .then(category => res.json(category))
  .catch(err => console.log(err)))

// update a category by its `id` value
router.put('/categories/:id', (req, res) => Category.update(req.body, { where: { id: req.params.id } })
  .then(() => res.sendStatus(200))
  .catch(err => console.log(err)))

  // delete a category by its `id` value
router.delete('/categories/:id', (req, res) => Category.destroy({ where: { id: req.params.id } })
  .then(() => res.sendStatus(200))
  .catch(err => console.log(err)))

module.exports = router
