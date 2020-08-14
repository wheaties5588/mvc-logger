var orm = require('../config/orm');

var burger = {
    selectAll: function(cb) {
      orm.selectAll("burgers", function(res) {
        cb(res);
      });
    },
    insertOne: function(burgerName, cb) {
      orm.insertOne("burgers", burgerName, function(res) {
        cb(res);
      });
    },
    updateOne: function(devoured, burgerId, cb) {
      orm.updateOne("burgers", devoured, burgerId, function(res) {
        cb(res);
      });
    }
  };
  
  module.exports = burger;