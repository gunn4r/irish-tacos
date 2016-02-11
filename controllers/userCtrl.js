var User = require('../models/userModel'),
    includes = require('./includes');
    _ = require('lodash');


module.exports = {
    create : function(req,res){
      var user = new User();
      req.body.meta = {};
      user = _.extend(user, req.body);
      console.log(user);
      user.save(function(err, result) {
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
        .select('-__v -password')
        .exec(includes.apiResultFunc(req,res));
    },

    update : function(req,res){
      User.findById(req.query.id, function(err, user){
        user = _.extend(user, req.body);
        console.log(user);
        user.save(includes.apiResultFunc(req, res));
      });
    },

    delete : function(req,res){ User.findByIdAndRemove(req.query.id, includes.apiResultFunc(req, res)); }
};
