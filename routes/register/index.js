var express = require('express');
var router = express.Router();
var loginService=require('../../services/regist.js');

/* GET home page. */
router.get('/regist', function(req, res, next) {
  res.render('register', { title: 'Express' });
});
router.post('/regist', function(req, res, next) {
  // res.render('register', { title: 'Express' });
  console.log('req',req.body);
  loginService.createMember(req.body);
  res.send({status:  0 });
  return;
});
module.exports = router;