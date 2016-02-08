var Inventory = require('../models/vendorModel'),
    includes = require('./includes');

module.exports = {
    create : function(req,res){ Inventory.create(req.body, includes.apiResultFunc(req,res)); },
    update : function(req,res){ Inventory.findByIdAndUpdate(req.query.id, req.body, includes.apiResultFunc(req,res)); },
    delete : function(req,res){ Inventory.findByIdAndRemove(req.query.id, includes.apiResultFunc(req,res)); },
    read : function(req,res){
        var query;

        if(req.query.id) query = Inventory.findOne({_id:req.query.id});
          else query = Inventory.find();

        query
        .populate({ path: 'meta.createdBy meta.updatedBy', select: 'nameFirst nameLast' })
        .populate({ path: 'brand', select: 'name' })
        .select('-__v')
        .exec(includes.apiResultFunc(req,res));
    }

  };
