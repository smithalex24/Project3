var db = require("./models");




var studentList = [
  {
      {
      name: "Larry",
      email: "larry@larry.com"
      password: 1234
      zipcode: 98021
      },
      field: {
        category: 'art',
        subcategory: 'photography'
      },
      description: "I am a high schooler interested in field of photography.",
      experience: "No relevant experience"
  },
  {
      {
      name: "Sam",
      email: "sam@sam.com"
      password: 1234
      zipcode: 98011
      },
      field: {
        category: 'medicine',
        subcategory: 'dentistry'
      },
      description: "I am a high schooler interested in field of medicine.",
      experience: "Nope"
  },
  {
      {
      name: "Bob",
      email: "bob@bob.com"
      password: 1234
      zipcode: 98034
      },
      field: {
        category: 'art',
        subcategory: 'dance'
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


