// Select the elements
let btnShowEngUnits = document.querySelector('#switchToEngMes');
let englishHeightUnits = document.querySelector('#english-height');

// Add event listeners to the button
btnShowEngUnits.addEventListener('click', () => {
  englishHeightUnits.classList.toggle('reveal');
  console.log('hello');
});

// Console logs
console.log(btnShowEngUnits, englishHeightUnits);
