var mongoose = require('mongoose');

var ImageSchema = new mongoose.Schema({
    title: String,
    gallery: String,
    description: String,
    url: String
}, { collection: 'astrophotos' });

mongoose.model('Image', ImageSchema);
