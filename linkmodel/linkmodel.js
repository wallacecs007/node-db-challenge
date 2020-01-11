const db = require('../data/dbconfig.js')

function findById(id) {
    return db('project_resource').where({id})
}

async function add(connection) {
    const [id] = await db('project_resource').insert(connection)
    return db('project_resource').where({id})
}

function get() {
    return db('project_resource')
}

module.exports = {
    findById,
    add,
    get
}