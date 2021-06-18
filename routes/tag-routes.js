const router = require('express').Router()
const { Tag, Product, ProductTag, Category } = require('../models')

// The `/api/tags` endpoint

// find all tags
// be sure to include its associated Product data
router.get('/tags', (req, res) => Tag.findAll()
  .then(tags => res.json(tags))
  .catch(err => console.log(err)))

  // find a single tag by its `id`
  // be sure to include its associated Product data
router.get('/tags/:id', (req, res) => Tag.findOne({ where: { id: req.params.id } })
  .then(tag => res.json(tag))
  .catch(err => console.log(err)))

  // create a new tag
router.post('/tags', (req, res) => Tag.create(req.body)
  .then(tag => res.json(tag))
  .catch(err => console.log(err)))

  // update a tag's name by its `id` value
router.put('/tags/:id', (req, res) => Tag.update(req.body, { where: { id: req.params.id } })
  .then(() => res.sendStatus(200))
  .catch(err => console.log(err)))

  // delete on tag by its `id` value
router.delete('/tags/:id', (req, res) => Tag.destroy({ where: { id: req.params.id } })
  .then(() => res.sendStatus(200))
  .catch(err => console.log(err)))

module.exports = router
