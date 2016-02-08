var mongoose = require('mongoose'),
    metaInfo = require('./schemas/metaSchema');

var itemSchema = new mongoose.Schema({
    item: {type: mongoose.Schema.Types.ObjectId, ref: 'Inventory'},
    quantity: { type: Number },
    itemCost: { type: Number }
});

var receiptSchema = new mongoose.Schema({

    purchaseDate: { type: Date, default: Date.now },
    vendor: { type: mongoose.Schema.Types.ObjectId, ref: 'Vendor'},
    totalCost: { type: Number, required: true, trim: true },
    items: [itemSchema],
    meta: metaInfo

});

module.exports = mongoose.model('Receipt', receiptSchema);
