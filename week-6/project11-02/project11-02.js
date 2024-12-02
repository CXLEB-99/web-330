"use strict";
/*    JavaScript 7th Edition
      Chapter 11
      Project 11-02

      Project to city and state information from a provided postal code
      Author: Caleb Goforth
      Date: 12/1/2024

      Filename: project11-02.js
*/

let postalCode = document.getElementById("postalCode");
let place = document.getElementById("place");
let region = document.getElementById("region");
let country = document.getElementById("country");

postalCode.onblur = function() {
    // Declare codeValue and countryValue variables
    let codeValue = postalCode.value;
    let countryValue = country.value;

    // Set place and region values to empty strings
    place.value = "";
    region.value = "";

    // Use Fetch to access the API
    fetch(`http://api.zippopotam.us/${countryValue}/${codeValue}`)
        .then(response => response.json())  // Parse the JSON response
        .then(json => {
            // Set the place and region values from the API response
            place.value = json.places[0]["place name"];   // Access place name
            region.value = json.places[0]["state abbreviation"];  // Access state abbreviation
        })
        .catch(error => {
            // Log any errors to the console
            console.error("Error:", error);
        });
};



