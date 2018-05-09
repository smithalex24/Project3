require('dotenv').config();
var express = require('express');
var request = require('request');
var router  = express.Router();
var userLocation;
var newLocation;

// include api keys
var ZIP_API_KEY = process.env.ZIP_API_KEY;
//APIs

request(`https://www.zipcodeapi.com/rest/${ZIP_API_KEY}/info.json/${userLocation}/degrees`;, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) 
  }
}

componentDidMount() {
    axios.get(`https://www.zipcodeapi.com/rest/${ZIP_API_KEY}/info.json/${userLocation}/degrees`)
      .then(res => {
        const results = res.data;
        this.setState({ people });
      })
  }


