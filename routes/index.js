var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('fullpage', { title: 'Express' });
});

router.get('/test', (req, res) => {
  res.render('template');
})

module.exports = router;
