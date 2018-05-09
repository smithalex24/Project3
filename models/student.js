var mongoose = require('mongoose');
var Schema = mongoose.Schema; 

//create schema
  var studentSchema = new mongoose.Schema({
  	userId: {
  		type: Schema.Types.ObjectId,
  		reference: 'User',
  		required: true
  	},
  	areas: Array,
    zipcode: Number
  });

  var studentSchema = mongoose.model('student', studentSchema);
  
  module.exports = student;