var mongoose = require('mongoose'),
    metaInfo = require('./schemas/metaSchema');

var inventorySchema = new mongoose.Schema({
    item: {type: mongoose.Schema.Types.ObjectId, ref: 'Inventory'},
    quantity: { type: Number },
    unit: { type: String }
});

var recipeSchema = new mongoose.Schema({

    name: { type: String, required: true, trim: true },
    menuPrice: { type: Number },
    ingredients: [inventorySchema],
    nonConsumables: [inventorySchema],
    meta: metaInfo

});

module.exports = mongoose.model('Recipe', recipeSchema);
