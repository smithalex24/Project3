require('dotenv').config();
var express = require('express');
var request = require('request');
var router  = express.Router();
var userDB = require('../models/user');
var userLocation;
var newLocation;

// include api keys
var ZIP_API_KEY = process.env.ZIP_API_KEY;
//APIs

// router.get('/getusersnearby', function(req, res){
// 	console.log('in getusersnearby route with this data:', req.body);
// 	request(`https://www.zipcodeapi.com/rest/${ZIP_API_KEY}/info.json/${userLocation}/degrees`, function(err, resp, body){
// 		console.log('request was made');
// 		console.log('err', err)
// 		console.log('body', body)

 router.post('/getusersnearby', function(req, res){
	console.log('in getusersnearby route with this data:', req.body);
	var zipcode = req.body.zipcode;
	console.log(zipcode);
	request(`https://www.zipcodeapi.com/rest/${ZIP_API_KEY}/radius.json/${zipcode}/10/miles?minimal
`, function(err, resp, body){
		console.log('request was made');
		let zipResults = JSON.parse(body);
		userDB.find({zipcode: {$in:zipResults.zip_codes}}).then(function(match) {
			console.log(match);
		})
		console.log('finding users');
		console.log('err', err)
		console.log('body', body)
		console.log(zipResults);

		//Once we get the list of zips from the API:
		//Make a DB call to the user model to find all users who have a zip in the list
		//You can use $in to make this one single query
		//In the DB promise,  but the res.send, but with the list of users
		res.send('temporary stub');
	})

});
 
module.exports = router;