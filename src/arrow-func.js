const square = function(x) {
  return x * x;
}
console.log(square(3));

// const squareArrow = (x) => {
//   return x * x;
// }

const squareArrow = (x) => x * x;
console.log(squareArrow(5));

const fullName = 'Hoang Phan';
const getName = (name) => name.split(' ')[0];

console.log(getName(fullName));