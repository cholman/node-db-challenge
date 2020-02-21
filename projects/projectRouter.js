const express = require('express');

const Projects = require('./projectDb.js');

const router = express.Router();

router.get('/', (req, res) => {
    // api/posts
    Projects.get(req.query)
      .then(projects => {
        res.status(200).json(projects)
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({message: "failed to get projects"})
      })
  });

router.post('/', (req, res) => {
    Projects.insert(req.body)
        .then(project => {
            res.status(200).json(project)
        })
        .catch(err => {
            res.status(500).json({
                message: "failed to add post"
            })
        })
})

  router.get('/:id', (req, res) => {
    // api/posts
    Projects.getById(req.params.id)
      .then(project => {
        res.status(200).json(project)
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          message: 'error retrieving project'
        })
      })
  });

  router.delete('/:id', (req, res) => {
    // api/posts
    Projects.remove(req.params.id)
      .then(project => {
        res.status(200).json(project)
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({errorMessage: "failed to delete"})
      })
  });

  router.put('/:id', (req, res) => {
    // api/posts
    Projects.update(req.params.id, req.body)
      .then(project => {
        res.status(200).json(project)
      })
      .catch(err => {
        res.status(500).json({
          message: "failed to update project"
        })
      })
  });
  

  module.exports = router;