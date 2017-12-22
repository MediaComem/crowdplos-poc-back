var express = require('express');
const router = express.Router();


// define the home page route
router.get('/', function(req, res, next) {
    console.log("get all users");
    res.send("get all users"); //Should ask the DB and return list of users
});
// define the about route
router.get('/:id', function(req, res, next) {
    console.log(req.params.id);
    res.send(req.params.id);
});

module.exports = router;

