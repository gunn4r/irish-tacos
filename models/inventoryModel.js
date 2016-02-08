var mongoose = require('mongoose'),
    metaInfo = require('./schemas/metaSchema');


var inventorySchema = new mongoose.Schema({

    name: {type: String, require: true, trim: true, index: true},
    brand: { type: mongoose.Schema.Types.ObjectId, ref: 'Brand'},
    quantity: { type: Number, required: true},
    units: { type: String, required: true},
    type: { type: String, enum: [
        'Consumable',
        'Non-Consumable'
    ]},
    category: { type: String },
    parLevel: { type: Number },
    stock: { type: Number },
    meta: metaInfo

});

module.exports = mongoose.model('Inventory', inventorySchema);
