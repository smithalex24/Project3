require('dotenv').config();
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/user');
var bcrypt = require('bcrypt');
var expressJWT = require('express-jwt');
var jwt = require('jsonwebtoken');

//set up student profile route
router.get('/student', is LoggedIn, function(req, res) {
	Student.find({'userId': req.user.id}, function(err, Student) {
		if(err) {
			console.log(err);
		}
		else {
			res.render('student', {Student})
		}
	})
});
//find specific user id
router.get('/:id', (req, res) => {
  Student.findOne({_id:req.params.id}).then(data =>{
    res.send(data)
  })
})

//create student info
router.post('/create', function(req, res) {
	console.log(req.body);
	let createData = {
		userId: req.body.userId,
	    field: req.body.field,
	    experience: req.body.experience,
	    description: req.body.description
	}
	Student.create(createData, function(err) {
		if(err) {
			console.log(err);
		}
	})
 	res.send();
});

module.exports = router;
