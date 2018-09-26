var router = require('express').Router();
var models = require('../models/index');

router.get('/',(req, res) => {
  models.User.findAll()
  .then((users) => {
    res.status(200).send(users);
  })
  .catch((error) => {
    res.status(400).send(error);
  });
});
  
module.exports = router;

