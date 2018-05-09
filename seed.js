var db = require("./models");

var studentList = [
  {
      {
      name: "Larry",
      email: "larry@larry.com"
      password: 1234
      },
      description: "I am a high schooler interested in field of photography.",
      experience: "No relevant experience"
  },
  {
      {
      name: "Sam",
      email: "sam@sam.com"
      password: 1234
      },
      description: "I am a high schooler interested in field of medicine.",
      experience: "Nope"
  },
  {
      {
      name: "Bob",
      email: "bob@bob.com"
      password: 1234
      },
      description: "I am a college student interested in field of dance.",
      experience: "I teach dance."
  }
 ]

db.Student.remove({}, function(err, students){
  db.Student.create(studentList, function(err, students){
    if (err) { return console.log('ERROR', err); }
    process.exit();
  });
  

var mentorList = [
  {
      {
      name: "Dr. Sean",
      email: "sean@sean.com"
      password: 1234
      },
      field: [{
        category: 'medicine',
        subcategory: 'dentistry'
      }],
      experience: "In the field of dentisty for 30 years. Hoping to inspire young people to reach for their dreams.",
  },
  {
      {
      name: "Shirley",
      email: "shirley@gmail.com"
      password: 1234
      },
      field: [{
        category: 'law',
        subcategory: 'human rights lawyer'
      }],
      experience: "I graduated with doctorate in law from Harvard University.",
  },
  {
      {
      name: "Cosmo",
      email: "cosmo@hotmail.com"
      password: 1234
      },
      field: [{
        category: 'astronomy',
        subcategory: 'aliens'
      }],
      experience: "I am a college student interested in field of dance.",
  }
 ]

db.Mentor.remove({}, function(err, mentors){
  db.Mentor.create(mentorList, function(err, mentors){
    if (err) { return console.log('ERROR', err); }
    process.exit();
  });
  
