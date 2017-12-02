var mongoose = require('mongoose');

var ImageSchema = new mongoose.Schema({
    id: Number,
    gallery: String,
    description: String,
    url: String
}, { collection: 'astrophotos' });

mongoose.model('Image', ImageSchema);
