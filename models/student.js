var mongoose = require('mongoose');
var Schema = mongoose.Schema; 

//create schema
  var studentSchema = new mongoose.Schema({
  	userId: {
  		type: Schema.Types.ObjectId,
  		reference: 'User',
  		required: true
  	},
    field: [{
      category: String,
      subcategory: String
    }],
    description: {
      type: String,
      required: true
    },
    experience: String
  });

  var Student = mongoose.model('Student', studentSchema);
  
  module.exports = Student;