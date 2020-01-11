const db = require('../data/dbconfig.js')

function findById(id) {
    return db('resources').where({id})
}

async function add(resource) {
    const [id] = await db('resources').insert(resource)
    return db('resources').where({id})
}

function get() {
    return db('resources')
}

module.exports = {
    findById,
    add,
    get
}