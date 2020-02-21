const express = require('express');

const Tasks = require('./taskDb.js');

const router = express.Router();

router.get('/', (req, res) => {
    // api/posts
    Tasks.get(req.query)
      .then(tasks => {
        res.status(200).json(tasks)
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({message: "failed to get Tasks"})
      })
  });

router.post('/', (req, res) => {
    Tasks.insert(req.body)
        .then(task => {
            res.status(200).json(task)
        })
        .catch(err => {
            res.status(500).json({
                message: "failed to add post"
            })
        })
})

  router.get('/:id', (req, res) => {
    // api/posts
    Tasks.getById(req.params.id)
      .then(task => {
        res.status(200).json(task)
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          message: 'error retrieving task'
        })
      })
  });

  router.delete('/:id', (req, res) => {
    // api/posts
    Tasks.remove(req.params.id)
      .then(task => {
        res.status(200).json(task)
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({errorMessage: "failed to delete"})
      })
  });

  router.put('/:id', (req, res) => {
    // api/posts
    Tasks.update(req.params.id, req.body)
      .then(task => {
        res.status(200).json(task)
      })
      .catch(err => {
        res.status(500).json({
          message: "failed to update task"
        })
      })
  });
  

  module.exports = router;