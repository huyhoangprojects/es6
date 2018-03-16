const add = function(a, b) {
  console.log(arguments);
  return a + b;
}
console.log(add(55, 22, 11));
console.log('--------------');
//  arguments objects - no longer bound with arrow function
const addArrow = (a, b) => {
  // console.log(arguments); error
  return a + b;
}
console.log(addArrow(44, 22, 77))
console.log('--------------');


const user = {
  name: 'Huy Hoang Phan',
  age: 26,
  lived: ['Binh Dinh', 'Ho Chi Minh'],
  showPlaceLived: function() {
    console.log(this.name);
    console.log(this.lived);
    this.lived.forEach((place) => console.log(this.name + ' has lived in ' + place));
  }
}

user.showPlaceLived();
console.log('--------------');

const multi = {
  numbers: [10, 20,30],
  multiBy: 3,
  multiply() {
    return this.numbers.map((num) => num * this.multiBy);
  }
}

console.log(multi.multiply());
console.log('--------------');