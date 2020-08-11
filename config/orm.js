var connection = require('./connection');

var orm = {
    selectAll: function(table, cb) {
        connection.query("SELECT * FROM " + table + ";", function(err, result) {
          if (err) {
            throw err;
          }
          cb(result);
        });
    },
    
    insertOne: function(table, name, cb) {
        connection.query("INSERT INTO " + table + " (burger_name, devoured) VALUES (?,0);", [name], function(err, result) {
            if (err) {
              throw err;
            }
            cb(result);
          }); 
    },
    
    updateOne: function(table, name, val, cb) { 
        connection.query("UPDATE ? SET devoured = ? WHERE burger_name = ?", [table, val, name], function (err, result) {
            if (err) {
                throw err;
              }
              cb(result);
        });
    }
}


module.exports = orm;