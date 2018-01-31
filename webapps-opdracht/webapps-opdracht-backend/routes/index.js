var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');
// Connectie db @mLab
mongoose.connect('mongodb://423967mv:s78!6pf@ds035995.mlab.com:35995/astrodb', { useMongoClient: true });
let Image = mongoose.model('Image');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

// Alle afbeeldingen ophalen
router.get('/API/images/', function (req, res, next) {
  Image.find(function (err, images) {
    if (err) { return next(err); }
    res.json(images);
  });
});

// Nieuwe afbeelding aanmaken
router.post('/API/images/', function (req, res, next) {
  let image = new Image();

  image.title = req.body.title;
  image.gallery = req.body.gallery;
  image.description = req.body.description;
  image.url = req.body.url;

  image.save(function (err, im) {
    if (err) { return next(err); }
    res.json(im);
  });
});

// Update afbeelding
router.put('/API/images/:id', function (req, res) {
  Image.findByIdAndUpdate(req.params.id,
    {
      $set: { title: req.body.title, gallery: req.body.gallery, description: req.body.description, url: req.body.url }
    },
    {
      new: true
    },
    function (err, updatedImage) {
      if (err) { return next(err); }
      res.json(updatedImage);
    });
});

// Delete afbeelding
router.delete('/API/images/:id', function (req, res) {
  Image.findByIdAndRemove(req.params.id, function (err, deletedImage) {
    if (err) { return next(err); }
    res.json(deletedImage);
  });
});

module.exports = router;
