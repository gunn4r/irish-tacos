var Vendor = require('../models/vendorModel'),
    includes = require('./includes');

module.exports = {
    create : function(req,res){
      var vendor = new Vendor();
      req.body.meta = {};
      vendor = _.extend(vendor, req.body);
      vendor.save(includes.apiResultFunc(req,res));
    },
    update : function(req,res){ Vendor.findByIdAndUpdate(req.query.id, req.body, includes.apiResultFunc(req,res)); },
    delete : function(req,res){ Vendor.findByIdAndRemove(req.query.id, includes.apiResultFunc(req,res)); },
    read : function(req,res){
        var query;

        if(req.query.id) query = Vendor.findOne({_id:req.query.id});
          else query = Vendor.find();

        query
        .populate({ path: 'meta.createdBy meta.updatedBy', select: 'nameFirst nameLast' })
        .select('-__v')
        .exec(includes.apiResultFunc(req,res));
    }

  };
