var Recipe = require('../models/recipeModel'),
    includes = require('./includes');

module.exports = {
    create : function(req,res){ Recipe.create(req.body, includes.apiResultFunc(req,res)); },
    update : function(req,res){ Recipe.findByIdAndUpdate(req.query.id, req.body, includes.apiResultFunc(req,res)); },
    delete : function(req,res){ Recipe.findByIdAndRemove(req.query.id, includes.apiResultFunc(req,res)); },
    read : function(req,res){
        var query;

        if(req.query.id) query = Recipe.findOne({_id:req.query.id});
          else query = Recipe.find();

        query
        .populate({ path: 'meta.createdBy meta.updatedBy', select: 'nameFirst nameLast' })
        .populate({ path: 'ingredients.item', select: '-meta -__v' })
        .populate({ path: 'nonConsumables.item', select: '-meta -__v' })
        .select('-__v')
        .exec(includes.apiResultFunc(req,res));
    }

  };
