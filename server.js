const express = require('express')

const PRouter = require('./project/prouter.js')
const TRouter = require('./task/trouter.js')
const RRouter = require('./resource/rrouter.js')

const server = express();
server.use(express.json());

server.use('/projects', PRouter)
server.use('/resources', RRouter)
server.use('/tasks', TRouter)

module.exports = server;