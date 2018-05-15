require('dotenv').config();
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/user');
var bcrypt = require('bcrypt');
var expressJWT = require('express-jwt');
var jwt = require('jsonwebtoken');
var Student = require ('../models/student')

//set up student profile route
router.get('/', function(req, res) {
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
//delete functionality for savedmentors
router.delete('/:id/:mentorId', (req, res) => {
    console.log(req.params.id)
    console.log(req.params.mentorId)
    User.findById
})
//create student info
router.post('/', function(req, res) {
	console.log(req.body);
	let createData = {
		userId: req.body.userId,
	    description: req.body.description,
	    experience: req.body.experience,
	}
	Student.create(createData, function(err) {
		if(err) {
			console.log(err);
		}
	})
 	res.send();
});

router.post('/:id', (req, res) => {
    User.findByIdAndUpdate(
        req.params.id,
        {$push: {savedMentors: req.body}},
        { 'new': true },
        function (err, user) {
            if(err) {
                console.log('Error', err);
            };
            user.save();
            res.send(user);
        }
    )
});

module.exports = router;
