var router = require('express').Router();
var models = require('../models/index');

router.get('/',(req, res) => {
  models.Link.findAll()
  .then((links) => {
    res.status(200).send(links);
  })
  .catch((error) => {
    res.status(400).send(error);
  });
});
  
module.exports = router;
