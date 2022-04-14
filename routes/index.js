var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Active Sender' });
});

router.post('/', function (req, res, next) {
  return "ola"
});

module.exports = router;
