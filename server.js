const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const projectRouter = require('./projects/projectRouter.js');
const taskRouter = require('./tasks/taskRouter.js');
const resourceRouter = require('./resources/resourceRouter.js');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/projects', logger, projectRouter);
server.use('/api/tasks', logger, taskRouter);
server.use('/api/resources', logger, resourceRouter);


server.get('/', (req, res) => {
    res.send(`Server Running`)
})

function logger(req, res, next) {
    console.log(`${req.method} Request to ${req.originalUrl} at ${Date()}`)
    next();
  }

module.exports = server;