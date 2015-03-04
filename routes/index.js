var Group = require('../models/group');

/*
 * GET home page.
 */

exports.index = function(req, res){
  Group.find({}, function(err, groups) {
    if (err) return next(err);

    res.render('index', {
      groups: groups
    });
  });
};

exports.new = function(req, res, next) {
  res.render('new');
}

exports.edit = function(req, res, next) {
  var groupId = req.params.id;

  Group.findById(groupId, function(err, group) {
    if (err) return next(err);
    if (!group) return next(new Error('Group not found'));

    res.render('editor', {
      group: group,
      source: group.en,
      target: group.zh
    });
  });
};

exports.create = function(req, res, next) {
  var groupId = req.body.id;
  var en = req.body.en;
  var zh = req.body.zh;

  Group.create({
    _id: groupId,
    en: en,
    zh: zh
  }, function(err) {
    if (err) return next(err);

    res.redirect('/');
  });
}

exports.update = function(req, res, next) {
  var groupId = req.params.id;
  var zh = req.body.zh;

  Group.findById(groupId, function(err, group) {
    if (err) return next(err);
    if (!group) return next(new Error('Group not found'));

    group.zh = zh;    

    group.save(function(err) {
      if (err) return next(err);

      res.redirect('/');
    });
  });
};


exports.output = function(req, res, next) {
  var groupId = req.params.id;

  Group.findById(groupId, function(err, group) {
    if (err) return next(err);
    if (!group) return next(new Error('Group not found'));

    res.render('output', {
      group: group
    });
  }); 
}
