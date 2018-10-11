var express = require('express');
var router = express.Router();
const loginRouter = require('./login');
const registRouter = require('./register');

/* GET home page. */
router.get('/app', function(req, res, next) {
  res.render('app', { title: 'Express' });
});
router.use('/', loginRouter,registRouter);

module.exports = router;
