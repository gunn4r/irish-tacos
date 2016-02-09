var mongoose = require('mongoose'),
    metaSchema = require('./schemas/metaSchema');


var brandSchema = new mongoose.Schema({

    name: { type: String, require: true, trim: true },
    meta: metaSchema

});


module.exports = mongoose.model('Brand', brandSchema);
