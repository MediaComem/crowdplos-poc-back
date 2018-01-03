var express = require('express');
var router = express.Router();
var pg = require('pg');

// define the home page route
router.get('/', function(req, res, next) {

});



router.get('/:id', function(req, res, next) {
    console.log(req.params.id);
    res.send(req.params.id);
});

module.exports = router;

