"use strict";
var student = {
    name: "",
    type: "student"
};

function calculateNumericOutput() {
    student.name = document.getElementById('name').value;
    
    var totalNameValue = 0;
    for (var letter = 0; letter < student.name.length; letter++){
        totalNameValue += student.name.charCodeAt(letter);
    }
    
    //Insert result into page
    var output = "Total Numeric Value of person's name is " + totalNameValue;
    document.getElementById('output').innerText = output;
}

function keyUp() {
    calculateNumericOutput();
}

function contentLoaded(event) {
    document.getElementById('name').addEventListener("keyup", keyUp); 
}

document.addEventListener('DOMContentLoaded', contentLoaded); //call contentLoaded function when all the page is loaded








