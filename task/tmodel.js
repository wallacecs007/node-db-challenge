const db = require('../data/dbconfig.js')

function findById(id) {
    return db('tasks').where({id})
}

async function add(task) {
    const [id] = await db('tasks').insert(task)
    return db('tasks').where({id})
}

function get() {
    return db('tasks')
}

module.exports = {
    findById,
    add,
    get
}