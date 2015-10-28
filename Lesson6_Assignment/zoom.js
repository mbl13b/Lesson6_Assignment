/*  Program Name:  Photo Gallery Application
    Author: Micha Lustan
    Date:   10/23/15
    Filename: zoom.js
 */

"use strict"; // interpret document contents in JavaScript strict mode


/* global variables */
var photoOrderArray = window.opener.photoOrder;
var figFilename = "images/IMG_0" + photoOrderArray[2] + ".jpg";


/* populate img element and create event listener */
function pageSetup() {
   document.getElementsByTagName("img")[0].src = figFilename; // assign filename to img element
   createEventListener(); 
} // end of pageSetup() 


/* close window */
function closeWin() {
  window.close();
} //end of closeWin()


/* create event listener for close button */
function createEventListener() {
  var closeWindowDiv = document.getElementsByTagName("p")[0];
  
  if (closeWindowDiv.addEventListener) {
    closeWindowDiv.addEventListener("click", closeWin, false);
  } // end of if loop
  
  else if (closeWindowDiv.attachEvent) {
    closeWindowDiv.attachEvent("onclick", closeWin);
  } // end of else if loop
} // end of createEventListener()

/* add img src value and create event listener when page finishes loading */
window.onload = pageSetup;