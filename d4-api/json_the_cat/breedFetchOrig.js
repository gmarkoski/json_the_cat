const request = require('request');
const fs = require('fs');

// // accept input from CLI, but remove 1st two elements
const userInput = process.argv[2];
console.log(userInput);


request(`https://api.thecatapi.com/v1/breeds/search?q=${userInput}`, (error, response, body) => {
  if (error) {
    console.log("error:", error);
    return;
  }
  if (response && response.statusCode === 200) {
    const desc = JSON.parse(body);
    if (desc[0]) {
      fs.writeFile(('./index.html'), desc[0].description, err => {
    
        if (err) {
          console.log("error; request failed");
          return;
        }
        console.log("download complete");
      });
    } else {
      console.log("breed not found");
    }
  }
});