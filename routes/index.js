var express = require('express');
var router = express.Router();
var db=require('../db-connection');

/* GET home page. */
router.get('/', function(req, res, next) {
  var sql='SELECT * FROM category LIMIT 10';
    db.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.render('index', { title: 'Category List', userData: data});
  });
});

module.exports = router;
