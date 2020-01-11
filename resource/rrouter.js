const resources = require('./rmodel.js')
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    resources.get()
        .then(r => {
            res.status(200).json(r)
        })
        .catch(err => {
            res.stuatus(500).json({message: "Error retrieving resources data"})
        })
})

router.post('/', (req, res) => {
    const body = req.body

    resources.add(body)
        .then(r => {
            res.status(201).json(r)
        })
        .catch(err => {
            res.status(500).json({message: 'Error adding resource'})
        })

})

module.exports = router;