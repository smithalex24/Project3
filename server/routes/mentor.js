require('dotenv').config();
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/user');
var bcrypt = require('bcrypt');
var expressJWT = require('express-jwt');
var jwt = require('jsonwebtoken');
var Mentor = require ('../models/mentor');

//find specific user id
router.get('/:id', (req, res) => {
  Mentor.findOne({_id:req.params.id}).then(data =>{
    res.send(data)
  })
})

//create student info
router.post('/', function(req, res) {
	console.log(req.body);
	let createMentor = {
		userId: req.body.userId,
	    field: req.body.field,
	    experience: req.body.experience
	}
	Mentor.create(createMentor, function(err, mentor) {
		if(err) {
			console.log(err);
		}
		res.send(mentor);
	});
});

module.exports = router;