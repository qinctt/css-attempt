var express = require('express');
var router = express.Router();
const loginRouter = require('./login');
const registRouter = require('./register');

/* GET home page. */
router.get('/index', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.use('/', loginRouter,registRouter);

module.exports = router;
