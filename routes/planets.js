let router = require('express').Router()
let Planets = require('../models/planet')

router.get('/', (req, res, next) => {
  Planets.find({})
    .then(planets => res.send(planets))
    .catch(next)
})

router.get('/:id', (req, res, next) => {
  Planets.findById(req.params.id)
    .then(planet => res.send(planet))
    .catch(next)
})

router.post('/', (req, res, next) => {
  Planets.create(req.body)
    .then(planet => res.send(planet))
    .catch(next)
})

router.put('/:id', (req, res, next) => {
  Planets.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.send({
      message: 'Success'
    }))
    .catch(next)
})

router.delete('/:id', (req, res, next) => {
  Planets.findByIdAndRemove(req.params.id)
    .then(() => res.send({
      message: "successfully removed Planet"
    }))
    .catch(next)
})

module.exports = router