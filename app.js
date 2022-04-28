// Select the elements
// The height div , switch between cm and ft,inch
const height = document.querySelector('.select-mes'); // button to change units of height
const engUnitsHeight = document.querySelector('#english-height');

console.log(height, engUnitsHeight);

// Add event listeners to the elements
const switchHeight = addEventListener('click', function () {
  if (engUnitsHeight.style.display !== 'none') {
    engUnitsHeight.style.display = 'none';
  } else {
    engUnitsHeight.style.display = 'flex';
  }
});

// console.log(switchHeight);
// Method with toogle between the classes
