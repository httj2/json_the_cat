const request = require('request');
const breedNameInput = process.argv[2];
// console.log(breedNameInput)
let catUrl = `https://api.thecatapi.com/v1/breeds/seach?q=${breedNameInput}`;





request((catUrl), (error, response, body) => {
  
  if (error) { //when there is an error
    console.log('Error: ', error);
  }
  const data = JSON.parse(body);
  if (data.length > 0) { //there is a breed present
    console.log(data[0].description);
  } else {   //when not a breed
    console.log(`${breedNameInput} was not found`);
  }
// console.log(typeof body) //string => need to converrt that to an object
});


//curl --request GET \
// --url 'https://api.thecatapi.com/v1/breeds?attach_breed=0' \
// --header '0c6e1a72-f1d8-4772-b738-b534f6f02941: DEMO-API-KEY'