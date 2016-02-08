var mongoose = require('mongoose'),
    metaInfo = require('./schemas/metaSchema');


var brandSchema = new mongoose.Schema({

    name: {type: String, require: true, trim: true, index: true},
    meta: metaInfo

});

module.exports = mongoose.model('Brand', brandSchema);
