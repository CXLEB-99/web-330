/*
  Pragmatic JavaScript
  Chapter 1
  Programming Assignment

  Author: Caleb Goforth
  Date: 11/6/2024
  Filename: Character Creation
*/

"use strict";

function createCharacter(name, gender, characterClass) {
  // Private variables to hold character details
  const _name = name;
  const _gender = gender;
  const _class = characterClass;

  // Return an object with methods to access the private variables
  return {
    getName: function() {
      return _name;
    },
    getGender: function() {
      return _gender;
    },
    getClass: function() {
      return _class;
    }
  };
}

document.getElementById("generateHero").addEventListener("click", function(e) {
  e.preventDefault();

 // Get form values
 const name = document.getElementById("heroName").value;
 const gender = document.getElementById("heroGender").value;
 const characterClass = document.getElementById("heroClass").value;

 // Create character using form values
 const character = createCharacter(name, gender, characterClass);

 // Display character information
 document.getElementById("characterOutput").innerHTML = `
   <h2>Character Created!</h2>
   <p><strong>Name:</strong> ${character.getName()}</p>
   <p><strong>Gender:</strong> ${character.getGender()}</p>
   <p><strong>Class:</strong> ${character.getClass()}</p>
 `;
});