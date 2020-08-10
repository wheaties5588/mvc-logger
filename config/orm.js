var connection = require('./connection');

var orm = {
    selectAll: function(table, cb) {
        connection.query("SELECT * FROM ?;", table, function(err, result) {
          if (err) {
            throw err;
          }
          cb(result);
        });
    },
    
    insertOne: function(table, name, cb) {
        connection.query("INSERT INTO ? (burger_name, devoured) VALUES (?,0);", [table, name], function(err, result) {
            if (err) {
              throw err;
            }
            cb(result);
          }); 
    },
    
    updateOne: function() { 
    }
}


module.exports = orm;