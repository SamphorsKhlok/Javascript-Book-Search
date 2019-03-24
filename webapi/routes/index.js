var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET users listing. */
router.get('/', function(req, res, next) {
  let data = {};
  data = JSON.parse(fs.readFileSync('./data/books.json', 'utf8'));

  console.log(data);
  res.json(data);
});

module.exports = router;
