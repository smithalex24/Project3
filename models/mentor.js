var mongoose = require('mongoose');

var mentorSchema = new mongoose.Schema({
	userId: {
		type: Schema.Types.ObjectId,
		reference: 'User',
		required: true
	},

