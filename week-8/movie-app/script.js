/*
  Pragmatic JavaScript
  Chapter 4
  Programming Assignment

  Author: Caleb Goforth
  Date: 12/16/2024
  Filename: script.js
*/

"use strict";

// Array of movie objects with properties: title, director, year, synopsis
const movies = [
  {
    title: "Inception",
    director: "Christopher Nolan",
    year: 2010,
    synopsis: "A mind-bending thriller about dreams within dreams.",
  },
  {
    title: "The Matrix",
    director: "The Wachowskis",
    year: 1999,
    synopsis: "A computer hacker learns about the true nature of reality.",
  },
  {
    title: "The Shawshank Redemption",
    director: "Frank Darabont",
    year: 1994,
    synopsis: "The story of hope and friendship inside a prison.",
  },
  {
    title: "The Lion King",
    director: "Roger Allers",
    year: 1994,
    synopsis: "The journey of Simba as he grows to embrace his destiny.",
  },
];

// Simulate a network call to fetch movie data
function fetchMovie(title) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const movie = movies.find(
        (m) => m.title.toLowerCase() === title.toLowerCase()
      );
      if (movie) {
        resolve(movie);
      } else {
        reject(new Error("Movie not found"));
      }
    }, 1000); // Simulates a 1-second delay
  });
}

// Handle form submission and display the movie data
document.getElementById("movie-form").addEventListener("submit", async (event) => {
  event.preventDefault(); // Prevent the form from submitting normally

  const titleInput = document.getElementById("title-input").value; // Get user input
  const titleField = document.getElementById("movie-title");
  const directorField = document.getElementById("movie-director");
  const yearField = document.getElementById("movie-year");
  const synopsisField = document.getElementById("movie-synopsis");
  const errorMessage = document.getElementById("error-message");

  // Clear previous data
  titleField.textContent = "";
  directorField.textContent = "";
  yearField.textContent = "";
  synopsisField.textContent = "";
  errorMessage.textContent = "";

  try {
    const movie = await fetchMovie(titleInput); // Wait for fetchMovie to resolve
    // Populate movie data on success
    titleField.textContent = `Title: ${movie.title}`;
    directorField.textContent = `Director: ${movie.director}`;
    yearField.textContent = `Release Year: ${movie.year}`;
    synopsisField.textContent = `Synopsis: ${movie.synopsis}`;
  } catch (error) {
    // Handle errors if movie is not found
    errorMessage.textContent = error.message;
  }
});
