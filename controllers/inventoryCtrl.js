var InventoryItem = require('../models/inventoryModel'),
    includes = require('./includes'),
      _ = require('lodash');

module.exports = {
  create : function(req,res){
    var inventory = new InventoryItem();
    req.body.meta = {};
    inventory = _.extend(inventory, req.body);
    inventory.save(includes.apiResultFunc(req,res));
  },
  read : function(req,res){
      var query;

      if(req.query.id) query = InventoryItem.findOne({_id:req.query.id});
        else query = InventoryItem.find();

      query
      .populate({ path: 'meta.createdBy meta.updatedBy', select: 'nameFirst nameLast' })
      .populate({ path: 'brand', select: 'name' })
      .select('-__v')
      .exec(includes.apiResultFunc(req,res));
  },

  update : function(req,res){
    InventoryItem.findById(req.query.id, function(err, inventory){
      inventory = _.extend(inventory, req.body);
      inventory.save(includes.apiResultFunc(req, res));
    });
  },

  delete : function(req,res){ InventoryItem.findByIdAndRemove(req.query.id, includes.apiResultFunc(req, res)); }
};
