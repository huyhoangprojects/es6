'use strict';

var square = function square(x) {
  return x * x;
};
console.log(square(3));

// const squareArrow = (x) => {
//   return x * x;
// }

var squareArrow = function squareArrow(x) {
  return x * x;
};
console.log(squareArrow(5));

var fullName = 'Hoang Phan';
var getName = function getName(name) {
  return name.split(' ')[0];
};

console.log(getName(fullName));
