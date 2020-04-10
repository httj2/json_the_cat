const request = require('request');


const fetchBreedDescription = (breedName, callback) => {
  const catURL = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(catURL, (error, response, body) => {
    if (error) {
      callback(error, null);
    }
    const data = JSON.parse(body);
    if (data.length !== 0) { //there is a breed present
      let desc = data[0].description.trim();  // description of breed, had trailing spaces at the end.
      callback(null, desc);
    } else {
      callback(null, `${breedName} is not a breed!!`);
    }
  });
};


module.exports = { fetchBreedDescription };
