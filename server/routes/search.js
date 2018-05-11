require('dotenv').config();
var express = require('express');
var request = require('request');
var router  = express.Router();
var userDB = require('../models/user');
var userLocation;
var newLocation;

// include api keys
var ZIP_API_KEY = process.env.ZIP_API_KEY;

 router.post('/getusersnearby', function(req, res){
	var zipcode = req.body.zipcode;
	request(`https://www.zipcodeapi.com/rest/${ZIP_API_KEY}/radius.json/${zipcode}/10/miles?minimal
`, function(err, resp, body){
		console.log('request was made');
		let zipResults = JSON.parse(body);	
		userDB.find({zipcode: {$in:zipResults.zip_codes}}).then(function(match) {
			res.send(match);
		})
		
	})

});

module.exports = router;