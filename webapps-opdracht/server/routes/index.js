var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

// Connectie db @mLab
mongoose.connect('mongodb://423967mv:s78!6pf@ds035995.mlab.com:35995/astrodb', {
  useMongoClient: true
}, error => {
  if (error) {
    console.log('MongoDb connection error: ' + error)
  } else {
    console.log('MongoDb connection successful!')
  }
});
let Image = mongoose.model('Image');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});

// Images api
// Alle afbeeldingen ophalen
router.get('/API/images/', function (req, res, next) {
  Image.find(function (err, images) {
    if (err) {
      return next(err);
    }
    res.json(images);
  });
});

// Nieuwe afbeelding aanmaken
router.post('/API/images/', verifyToken, function (req, res, next) {
  let image = new Image();

  image.title = req.body.title;
  image.gallery = req.body.gallery;
  image.description = req.body.description;
  image.url = req.body.url;

  image.save(function (err, im) {
    if (err) {
      return next(err);
    }
    res.json(im);
  });
});

// Update afbeelding
router.put('/API/images/:id', verifyToken, function (req, res) {
  Image.findByIdAndUpdate(req.params.id, {
      $set: {
        title: req.body.title,
        gallery: req.body.gallery,
        description: req.body.description,
        url: req.body.url
      }
    }, {
      new: true
    },
    function (err, updatedImage) {
      if (err) {
        return next(err);
      }
      res.json(updatedImage);
    });
});

// Delete afbeelding
router.delete('/API/images/:id', verifyToken, function (req, res) {
  Image.findByIdAndRemove(req.params.id, function (err, deletedImage) {
    if (err) {
      return next(err);
    }
    res.json(deletedImage);
  });
});


// Users api
// Middleware to protect API
function verifyToken(req, res, next) {
  if (!req.headers.authorization) {
    return res.status(401).send('This request is not authorized!');
  }

  let token = req.headers.authorization.split(' ')[1] // Gets the part after 'Bearer'
  if (token === 'null') {
    return res.status(401).send('This request is not authorized!');
  }

  let payload = jwt.verify(token, process.env.BACKEND_SECRET);
  if (!payload) {
    return res.status(401).send('This request is not authorized!');
  }

  req.userId = payload.subject;
  next();
}

// Register user
router.post('/API/users/register', (req, res) => {
  let user = new User()

  user.username = req.body.username;
  user.setPassword(req.body.password)

  user.save((error, newUser) => {
    if (error) {
      console.log(error)
    } else {
      let token = newUser.generateJWT();
      res.status(200).send({
        token
      })
    }
  })
})

// Login user
router.post('/API/users/login', (req, res) => {
  User.findOne({
    username: req.body.username
  }, (error, user) => {
    if (error) {
      console.log(error)
    } else {
      if (!user) {
        res.status(401).send('Invalid username!')
      } else {
        if (!user.validPassword(req.body.password)) {
          res.status(401).send('Invalid password!')
        } else {
          let token = user.generateJWT();
          res.status(200).send({
            token
          })
        }
      }
    }
  })
})

module.exports = router;
