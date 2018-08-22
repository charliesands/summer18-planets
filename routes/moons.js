let router = require('express').Router()
let Moons = require('../models/galaxy')

router.get('/', (req, res, next) => {
  Moons.find({})
    .then(moons => res.send(moons))
    .catch(next)
})

router.get('/:id', (req, res, next) => {
  Moons.findById(req.params.id)
    .then(moon => res.send(moon))
    .catch(next)
})

router.post('/', (req, res, next) => {
  Moons.create(req.body)
    .then(moon => res.send(moon))
    .catch(next)
})

router.put('/:id', (req, res, next) => {
  Moons.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.send({
      message: 'Success'
    }))
    .catch(next)
})

router.delete('/:id', (req, res, next) => {
  Moons.findByIdAndRemove(req.params.id)
    .then(() => res.send({
      message: "successfully removed Moon"
    }))
    .catch(next)
})

module.exports = router