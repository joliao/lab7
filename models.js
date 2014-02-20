
var Mongoose = require('mongoose');


var ProjectSchema = new Mongoose.Schema({
  // fields are defined here
  //create a schema for the data in projects.json
  "title": String,
  "date": Date,
  "summary": String,
  "image": String
});

exports.Project = Mongoose.model('Project', ProjectSchema);


