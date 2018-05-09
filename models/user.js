var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 99
  },
  email: { // TODO: Need to add email validation
    type: String,
    required: true,
    unique: true,
    minlength: 5,
    maxlength: 99
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 99
  },
  zipcode: {
    type: Number,
    required: true
  }
<<<<<<< HEAD
   zipcode: {
    type: Number,
    required: true
  },
=======
>>>>>>> f65ff296b1b0619ba4a1b72823cfa14849bc2230
  
});

// Override 'toJSON' to prevent the password from being returned with the user
userSchema.set('toJSON', {
  transform: function(doc, user, options) {
    var returnJson = {
      id: user._id,
      email: user.email,
      name: user.name,
      zipcode: user.zipcode
    };
    return returnJson;
  }
});

userSchema.methods.authenticated = function(password, callback) {
  return bcrypt.compareSync(password, this.password);
}
  

// Mongoose's version of a beforeCreate hook
userSchema.pre('save', function(next) {
  var hash = bcrypt.hashSync(this.password, 10);
  // store the hash as the user's password
  this.password = hash;
  next();
});

var User = mongoose.model('User', userSchema);

module.exports = User;
