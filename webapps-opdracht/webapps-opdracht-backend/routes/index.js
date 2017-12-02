var express = require('express');
var router = express.Router();

let mongoose = require('mongoose');
let Image = mongoose.model('Image');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Alle afbeeldingen ophalen
router.get('/API/images/', function(req, res, next) {
  Image.find(function(err, images) {
    if (err) { return next(err); }
    res.json(images);
  });
});

router.post('/API/images/', function (req, res, next) {
  let image = new Image(req.body);
  image.save(function(err, rec) {
    if (err){ return next(err); }
    res.json(rec);
  });
}); 

module.exports = router;
