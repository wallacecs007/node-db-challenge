const projects = require('./pmodel.js')
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    projects.get()
        .then(project => {
            for( i = 0; i < project.length; i++) {
                if(project[i].completed === 0) {
                    project[i].completed = false;
                } else {
                    project[i].completed = true;
                }
            }
            res.status(200).json(project)
        })
        .catch(err => {
            res.status(500).json({message: "Error retrieving projects data"})
        })
})

router.post('/', (req, res) => {
    const body = req.body

    projects.add(body)
        .then(project => {
            res.status(201).json(project)
        })
        .catch(err => {
            res.status(500).json({message: 'Error adding project data'})
        })
})

module.exports = router;