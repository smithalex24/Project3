var mongoose = require('mongoose');
var Schema = mongoose.Schema; 


var mentorSchema = new mongoose.Schema({
	userId: {
		type: Schema.Types.ObjectId,
		reference: 'User',
		required: true
	},
	field: Array,
	experience: String 

});

var Mentor = mongoose.model('Mentor', mentorSchema);
  
module.exports = Mentor;


