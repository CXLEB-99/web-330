"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-02

      Project to read field values from web storage
      Author: Caleb Goforth
      Date: 11/14/2024

      Filename: project09-02a.js
*/

/* Page Objects */

let riderName = document.getElementById("riderName");
let ageGroup = document.getElementById("ageGroup");
let bikeOption = document.getElementById("bikeOption");
let routeOption = document.getElementById("routeOption");
let accOption = document.getElementById("accOption");
let region = document.getElementById("region");
let miles = document.getElementById("miles");
let comments = document.getElementById("comments");

/* Function to display the data */
function showData() {
  console.log("Rider Name:", riderName.value);
  console.log("Age Group:", ageGroup.value);
  console.log("Bike Option:", bikeOption.value);
  console.log("Route Option:", routeOption.value);
  console.log("Accommodation Option:", accOption.value);
  console.log("Region:", region.value);
  console.log("Miles per Day:", miles.value);
  console.log("Comments:", comments.value);

    // Store the form data in sessionStorage
    sessionStorage.setItem("riderName", riderName.value);
    sessionStorage.setItem("ageGroup", ageGroup.value);
    sessionStorage.setItem("bikeOption", bikeOption.value);
    sessionStorage.setItem("routeOption", routeOption.value);
    sessionStorage.setItem("accOption", accOption.value);
    sessionStorage.setItem("region", region.value);
    sessionStorage.setItem("miles", miles.value);
    sessionStorage.setItem("comments", comments.value);


  // Redirect to project09-02b.html
  location.href = "project09-02b.html";
}

// Attach an event listener to the Submit button
document.getElementById("submitButton").onclick = showData;