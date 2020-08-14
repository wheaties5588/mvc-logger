var express = require('express');
var burger = require('../models/burgers');


var router = express.Router();


//Get router for the selectAll
router.get("/", function(req, res) {
   //console.log(req);
    burger.selectAll(function(data) {
        var burgObject = { burgers: data };
        console.log(burgObject);
        res.render("index", burgObject);
    });
});


//Post router for the insertOne
router.post("/api/burgers", function(req, res) {
    burger.insertOne(req.body.name, function(result) {
        res.json({ id: result.insertId });
    })
});


//Update router for the updateOne
router.put("/api/burgers/:id", function(req, res) {
    var id = req.params.id;
    var devoured = 1;
    
    console.log("condition", id);  
    
    burger.updateOne(devoured, id, function(result) {
        if (result.changedRows == 0) {
          // If no rows were changed, then the ID must not exist, so 404
          return res.status(404).end();
        } else {
          res.status(200).end();
        }
      });
});

module.exports = router;