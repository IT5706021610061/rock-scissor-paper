var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
  extended: true
}));
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/choice', function(req, res) {
  let rsp = req.body.gender

  let ran = Math.floor((Math.random() * 3));
  console.log(ran)
  if (rsp == 0 &&ran==0) {
    res.render('users', {result: 'เสมอ',ues: 'rock.JPG',sum : 'rock.JPG'})
  }else if (rsp == 0&&ran==1) {
    res.render('users', {result: 'ชนะ',ues: 'rock.JPG',sum : 'sissor.JPG'})
  }else if (rsp == 0&&ran==2) {
    res.render('users', {result: 'แพ้',ues: 'rock.JPG',sum : 'paper.JPG'})
  }else if (rsp == 1&&ran==0) {
    res.render('users', {result: 'แพ้',ues: 'sissor.JPG',sum : 'rock.JPG'})
  }else if (rsp == 1&&ran==1) {
    res.render('users', {result: 'เสมอ',ues: 'sissor.JPG',sum : 'sissor.JPG'})
  }else if (rsp == 1&&ran==2) {
    res.render('users', {result: 'ชนะ',ues: 'sissor.JPG',sum : 'paper.JPG'})
  }else if (rsp == 2&&ran==0) {
    res.render('users', {result: 'ชนะ',ues: 'paper.JPG',sum : 'rock.JPG'})
  }else if (rsp == 2&&ran==1) {
    res.render('users', {result: 'แพ้',ues: 'paper.JPG',sum : 'sissor.JPG'})
  }else if (rsp == 2&&ran==2) {
    res.render('users', {result: 'เสมอ',ues: 'paper.JPG',sum : 'paper.JPG'})
  }
});

module.exports = router;
