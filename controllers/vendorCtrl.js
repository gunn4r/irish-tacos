var Vendor = require('../models/vendorModel');

function resultFunc(req, res){
    return function(err, result){
        if(err) res.status(500).send("OPERATION ERROR");
            else res.send(result);
    };
}

module.exports = {
    create : function(req,res){
      Vendor.create(req.body, function(err, result) {
            if(err) return res.status(500).send(err);
            res.status(200).json(result);
          });
    },
    update : function(req,res){ Vendor.findByIdAndUpdate(req.query.id, req.body, resultFunc(req, res)); },
    // delete : function(req,res){ User.findByIdAndRemove(req.params.id, resultFunc(req, res)); }
    read : function(req,res){
      if(req.query){
        Vendor
        .find(req.query)
        .populate({
          path: 'meta.createdBy meta.updatedBy',
          select: 'nameFirst nameLast'
        })
        .select('-__v')
        .exec(function(err, result){
          if(err) return res.status(500).send(err);
            else res.send(result);
        });
      } //end if
    }//end read

  };

// module.exports = {
//
//   register: function(req, res, next) {
//     User.create(req.body, function(err, result) {
//       if(err) return res.status(500).send(err);
//       result.password = null;
//       res.status(200).json(result);
//     });
//   },
//
//   me: function(req, res, next) {
//     if (!req.user) return res.status(401).send('Current user not defined');
//     req.user.password = null;
//     return res.status(200).json(req.user);
//   },
//
//   update: function(req, res, next) {
//     User.findByIdAndUpdate(req.params._id, req.body, function(err, result) {
//       if (err) next(err);
//       res.status(200).send('User Updated\n' + result);
//     });
//   },
//
//   read : function(req,res){ User.find(req.query).exec(resultFunc(req, res)); },
//
// };
