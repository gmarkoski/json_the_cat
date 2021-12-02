const request = require('request');
const fs = require('fs');

// // accept input from CLI, but slice 1st two elements
const userInput = process.argv[2];
console.log(userInput);


request(`https://api.thecatapi.com/v1/breeds/search?q=${userInput}`, (error, response, body) => {
  if (error) {
    console.log("error:", error);
    return;
  }
  if (response && response.statusCode === 200) {
    const data = JSON.parse(body);
    if (data[0]) {
      fs.writeFile(('./index.html'), data[0].description, err => {
    
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
  
  //console.log('error:', error);                      // Print the error if one occurred
  //console.log('statusCode:', response && response.statusCode);          // Print the response status code if a response was received
  //console.log('body:', body);                                         // Print the HTML for the education.edu homepage.
  
  //const data = JSON.parse(body);
  //console.log("data:", data);
  //console.log(data);
  //console.log(typeof data);
  // if (response !== data) {
  //   console.log('breed not found');
  // }

  // fs.writeFile(('./index.html'), body, err => {
    
  //   if (err) {
  //     console.log("error; request failed");
  //     return;
  //   }
  //   console.log("download complete");
  // });
});









