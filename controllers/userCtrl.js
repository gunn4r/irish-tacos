var User = require('../models/userModel'),
    includes = require('./includes');


module.exports = {
    create : function(req,res){
      User.create(req.body, function(err, result) {
            if(err) return res.status(500).send(err);
            result.password = null;
            res.status(200).json(result);
          });
    },
    read : function(req,res){
        var query;

        if(req.query.id) query = User.findOne({_id:req.query.id});
          else query = User.find();

        query
        .populate({ path: 'meta.createdBy meta.updatedBy', select: 'nameFirst nameLast' })
        .select('-__v')
        .exec(includes.apiResultFunc(req,res));
    },
    update : function(req,res){ User.findByIdAndUpdate(req.params.id, req.body, includes.apiResultFunc(req, res)); },
    delete : function(req,res){ User.findByIdAndRemove(req.params.id, includes.apiResultFunc(req, res)); }
};
