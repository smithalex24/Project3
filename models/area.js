var mongoose = require('mongoose');
mentorSchema.require('./mentor');

var areaSchema = new mongoose.Schema({
	subject: Array,
	mentor: [mentorSchema]
})


var area = mongoose.model('area', areaSchema);
module.exports = area