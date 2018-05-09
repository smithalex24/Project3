var mongoose = require('mongoose');
areaSchema = require('./area.js');

var mentorSchema = new mongoose.Schema({
	userId: {
		type: Schema.Types.ObjectId,
		reference: 'User',
		required: true
	},

