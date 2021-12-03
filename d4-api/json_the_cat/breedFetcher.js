const request = require('request');
const fs = require('fs');


const fetchBreedDescription = function(userInput, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${userInput}`, (error, response, body) => {
    
    const desc = JSON.parse(body);
    callback(error, desc);
  });
};

module.exports = fetchBreedDescription;