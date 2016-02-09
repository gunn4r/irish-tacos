var Receipt = require('../models/receiptModel'),
    includes = require('./includes');

module.exports = {
    create : function(req,res){ Receipt.create(req.body, includes.apiResultFunc(req,res)); },
    update : function(req,res){ Receipt.findByIdAndUpdate(req.query.id, req.body, includes.apiResultFunc(req,res)); },
    delete : function(req,res){ Receipt.findByIdAndRemove(req.query.id, includes.apiResultFunc(req,res)); },
    read : function(req,res){
        var query;

        if(req.query.id) query = Receipt.findOne({_id:req.query.id});
          else query = Receipt.find();

        query
        .populate({ path: 'meta.createdBy meta.updatedBy', select: 'nameFirst nameLast' })
        .populate({ path: 'vendor', select: 'name' })
        .populate({ path: 'items.item', select: '-meta -__v' })
        .select('-__v')
        .exec(includes.apiResultFunc(req,res));
    }

  };
