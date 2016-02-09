var Brand = require('../models/brandModel'),
    includes = require('./includes');

module.exports = {
    create : function(req,res){ Brand.create(req.body, includes.apiResultFunc(req,res)); },
    update : function(req,res){Brand.findByIdAndUpdate(req.query.id, {$set: req.body}, includes.apiResultFunc(req,res));},
    delete : function(req,res){ Brand.findByIdAndRemove(req.query.id, includes.apiResultFunc(req,res)); },
    read : function(req,res){
        var query;

        if(req.query.id) query = Brand.findOne({_id:req.query.id});
          else query = Brand.find();

        query
        .populate({ path: 'meta.createdBy meta.updatedBy', select: 'nameFirst nameLast' })
        .select('-__v')
        .exec(includes.apiResultFunc(req,res));
    }

  };
