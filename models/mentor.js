var mongoose = require('mongoose');

var mentorSchema = new mongoose.Schema({
	userId: {
		type: Schema.Types.ObjectId,
		reference: 'User',
		required: true
	},
	field: [{
		category: String,
		subcategory: String
	}],
	experience: String
});

var Mentor = mongoose.model('Mentor', mentorSchema);

module.exports = Mentor

