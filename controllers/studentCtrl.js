var Student = require('../models/studentModel'),
    includes = require('./includes'),
      _ = require('lodash');

module.exports = {
  create : function(req,res){
    var student = new Student();
    req.body.meta = {};
    student = _.extend(student, req.body);
    student.save(includes.apiResultFunc(req,res));
  },
  read : function(req,res){
      var query;

      if(req.query.id) query = Student.findOne({_id:req.query.id});
        else query = Student.find();

      query
      .populate({ path: 'meta.createdBy meta.updatedBy', select: 'nameFirst nameLast' })
      .select('-__v')
      .exec(includes.apiResultFunc(req,res));
  },

  update : function(req,res){
    Student.findById(req.query.id, function(err, student){
      student = _.extend(student, req.body);
      student.save(includes.apiResultFunc(req, res));
    });
  },

  delete : function(req,res){ Student.findByIdAndRemove(req.query.id, includes.apiResultFunc(req, res)); }
};
