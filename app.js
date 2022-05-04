'use strict';

// Select the elements
// The button and switch for height
const btnShowEngUnitsHeight = document.querySelector('#switchToEngMes');
const englishHeightUnits = document.querySelector('#english-height');
// The button and switch for the weight
const btnShowEngUnitsWeight = document.querySelector('#switchToEngMesWeight');
const englishWeightUnits = document.querySelector('#english-weight');

// Add event listeners to the button for the height /hide show div
btnShowEngUnitsHeight.addEventListener('click', () => {
  englishHeightUnits.classList.toggle('reveal');
  console.log('hello');
});

// Add event listener to the button for weight /hide and show

btnShowEngUnitsWeight.addEventListener('click', () => {
  englishWeightUnits.classList.toggle('reveal-weightEng');
  console.log('hello');
});

// Console logs
console.log(btnShowEngUnitsHeight, englishHeightUnits);
