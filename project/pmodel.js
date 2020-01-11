const db = require('../data/dbconfig.js')

function findById(id) {
    return db('projects').where({id})
}

async function add(project) {
    const [id] = await db('projects').insert(project)
    return db('projects').where({id})
}

function get() {
    return db('projects')
}

module.exports = {
    findById,
    add,
    get
}