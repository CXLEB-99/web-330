/*
  Pragmatic JavaScript
  Chapter 3
  Programming Assignment

  Author: Caleb Goforth
  Date: 12/8/2024
  Filename: script.js
*/

// List of Chef Data with flags representing their origin
let chefs = [
  {
    name: "Gordon Ramsay",
    specialty: "British Cuisine",
    weakness: "Spicy Food",
    restaurantLocation: "London",
    originFlag: "https://flagcdn.com/w320/gb.png",
  },
  {
    name: "Massimo Bottura",
    specialty: "Italian Fine Dining",
    weakness: "Overly Complex Dishes",
    restaurantLocation: "Modena",
    originFlag: "https://flagcdn.com/w320/it.png",
  },
  {
    name: "Dominique Crenn",
    specialty: "French Cuisine",
    weakness: "Seafood Allergies",
    restaurantLocation: "San Francisco",
    originFlag: "https://flagcdn.com/w320/fr.png",
  }
];

// Simulate a delay and return chef data with promise
function retrieveChef(chef, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.2) {
        resolve(chef); // Simulate successful data retrieval
      } else {
        reject("Failed to fetch data"); // Simulate failure
      }
    }, delay);
  });
}

// Main function to retrieve all chef information
function loadAllChefs() {
  let chefPromises = [
    retrieveChef(chefs[0], 2000),
    retrieveChef(chefs[1], 3000),
    retrieveChef(chefs[2], 4000),
  ];

  Promise.allSettled(chefPromises).then((results) => {
    results.forEach((result, index) => {
      const chefContainer = document.getElementById(`chef${index + 1}`);
      if (result.status === "fulfilled") {
        displayChef(result.value, chefContainer);
      } else {
        displayError(result.reason, chefContainer);
      }
    });
  });
}

// Function to dynamically add chef data to the DOM
function displayChef(chef, container) {
  container.innerHTML = `
    <img src="${chef.originFlag}" alt="Chef's origin flag" class="flag" />
    <h2>${chef.name}</h2>
    <p><strong>Specialty:</strong> ${chef.specialty}</p>
    <p><strong>Weakness:</strong> ${chef.weakness}</p>
    <p><strong>Location:</strong> ${chef.restaurantLocation}</p>
  `;
}

// Function to handle errors in retrieval
function displayError(message, container) {
  container.innerHTML = `
    <div class="error">Error: ${message}</div>
  `;
}

// Call the main function to load chefs
loadAllChefs();
