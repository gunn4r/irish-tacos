var Brand = require('../models/brandModel'),
    includes = require('./includes'),
      _ = require('lodash');

module.exports = {
  create : function(req,res){
    var brand = new Brand();
    req.body.meta = {};
    brand = _.extend(brand, req.body);
    brand.save(includes.apiResultFunc(req,res));
  },
  read : function(req,res){
      var query;

      if(req.query.id) query = Brand.findOne({_id:req.query.id});
        else query = Brand.find();

      query
      .populate({ path: 'meta.createdBy meta.updatedBy', select: 'nameFirst nameLast' })
      .select('-__v')
      .exec(includes.apiResultFunc(req,res));
  },

  update : function(req,res){
    Brand.findById(req.query.id, function(err, brand){
      var updatedBrand = new Brand();
      updatedBrand = _.extend(brand, req.body);
      updatedBrand.save(includes.apiResultFunc(req, res));
    });
  },

  delete : function(req,res){ Brand.findByIdAndRemove(req.query.id, includes.apiResultFunc(req, res)); }
};
