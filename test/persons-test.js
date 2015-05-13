var Person = require('../models/persons');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/crudtest');

var p = new Person({name:"Joel", age:25});
p.save(function(err, doc){
  console.log(err,doc);
});
