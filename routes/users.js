var express = require('express');
const users = require('./database.js');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
users.users()
  .then(response => {
    res.json(response.rows);
  });
});


// POST insert new person
router.post('/', function (req, res, next) {
const question1 = req.body.question1;
const question11 = req.body.question11;
const question12 = req.body.question12;
const question13 = req.body.question13;
const question14 = req.body.question14;
const question15 = req.body.question15;
const question16 = req.body.question16;
const question17 = req.body.question17;
const question18 = req.body.question18;
const question19 = req.body.question19;
const question20 = req.body.question20;
users.insertUser(
  question1, 
  question11,
  question12,
  question13,
  question14,
  question15,
  question16,
  question17,
  question18,
  question19,
  question20)
  .then(resolved => {
    console.log(resolved);
    res.send('OK');
  })
});


module.exports = router;