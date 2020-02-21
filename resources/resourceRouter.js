const express = require('express');

const Resources = require('./resourceDb.js');

const router = express.Router();

router.get('/', (req, res) => {
    // api/resources
    Resources.get(req.query)
      .then(resources => {
        res.status(200).json(resources)
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({message: "failed to get resources"})
      })
  });

router.post('/', (req, res) => {
    Resources.insert(req.body)
        .then(resource => {
            res.status(200).json(resource)
        })
        .catch(err => {
            res.status(500).json({
                message: "failed to add resource"
            })
        })
})

  router.get('/:id', (req, res) => {
    // api/posts
    Resources.getById(req.params.id)
      .then(resource => {
        res.status(200).json(resource)
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          message: 'error retrieving resource'
        })
      })
  });

  router.delete('/:id', (req, res) => {
    // api/posts
    Resources.remove(req.params.id)
      .then(resource => {
        res.status(200).json(resource)
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({errorMessage: "failed to delete"})
      })
  });

  router.put('/:id', (req, res) => {
    // api/posts
    Resources.update(req.params.id, req.body)
      .then(resource => {
        res.status(200).json(resource)
      })
      .catch(err => {
        res.status(500).json({
          message: "failed to update resource"
        })
      })
  });
  

  module.exports = router;