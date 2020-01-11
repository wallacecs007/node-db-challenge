const tasks = require('./tmodel.js')
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    tasks.get()
        .then(task => {
            for( i = 0; i < task.length; i++) {
                if(task[i].completed === 0) {
                    task[i].completed = false;
                } else {
                    task[i].completed = true;
                }
            }
            res.status(200).json(task)
        })
        .catch(err => {
            res.status(500).json({message: 'Error retrieving tasks data'})
        })
})

router.post('/', (req, res) => {
    const body = req.body

    tasks.add(body)
        .then(task => {
            res.status(201).json(task)
        })
        .catch(err => {
            res.status(500).json({message: 'Error adding task data'})
        })
})

module.exports = router;