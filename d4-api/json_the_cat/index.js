// index.js
const fetchBreedDescription = require('./breedFetcher');

const userInput = process.argv[2];      // accept input from CLI, but remove 1st two elements

fetchBreedDescription(userInput, (error, desc) => {
  if (error) {
    console.log('Error:', error);
  } else {
    console.log(desc);
  }
});