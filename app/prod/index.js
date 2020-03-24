'use strict';

console.log('index.js is run');

const leftButton = $('#leftButton');
console.log('leftButton', leftButton);

let click = 0;

$('#leftButton').mouseover(function(event) {
  $('.navigation').addClass('active');
});

$('#leftButton').click(function(event) {
  if (click == 0) {
    $('.navigation').addClass('active');
  } else {
    $('.navigation').toggleClass('active');
  }
  click += 1;
});

$('#navigation').mouseleave(function(event) {
  $('.navigation').removeClass('active');
});
