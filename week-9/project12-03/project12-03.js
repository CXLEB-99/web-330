"use strict";
/*    JavaScript 7th Edition
      Chapter 12
      Project 12-03

      Project to show a recipe with expanding/contracting content
      Author: Caleb Goforth
      Date: 12/21/2024

      Filename: project12-03.js
*/


$("article h2").click(function() {


    // heading variable references the target of the click event
    var heading = $(this);

    // list variable references the next sibling element of the heading
    var list = heading.next();

    // headingImage variable references the children of the heading whose tag name is "img"
    var headingImage = heading.children("img");

    // Alternate between hiding and showing the content of the lists using slideToggle()
    list.slideToggle(500); // 500 ms for the slideToggle effect

    // Change the symbol in the headings based on the image's src attribute
    var currentSrc = headingImage.attr("src");
    if (currentSrc === "plus.png") {
        headingImage.attr("src", "minus.png");
    } else {
        headingImage.attr("src", "plus.png");
    }
});
