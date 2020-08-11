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
router.put("/:id", function(req, res) {
    
});

module.exports = router;