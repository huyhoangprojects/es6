'use strict';

var add = function add(a, b) {
  console.log(arguments);
  return a + b;
};
console.log(add(55, 22, 11));
console.log('--------------');
//  arguments objects - no longer bound with arrow function
var addArrow = function addArrow(a, b) {
  // console.log(arguments); error
  return a + b;
};
console.log(addArrow(44, 22, 77));
console.log('--------------');

var user = {
  name: 'Huy Hoang Phan',
  age: 26,
  lived: ['Binh Dinh', 'Ho Chi Minh'],
  showPlaceLived: function showPlaceLived() {
    var _this = this;

    console.log(this.name);
    console.log(this.lived);
    this.lived.forEach(function (place) {
      return console.log(_this.name + ' has lived in ' + place);
    });
  }
};

user.showPlaceLived();
console.log('--------------');

var multi = {
  numbers: [10, 20, 30],
  multiBy: 3,
  multiply: function multiply() {
    var _this2 = this;

    return this.numbers.map(function (num) {
      return num * _this2.multiBy;
    });
  }
};

console.log(multi.multiply());
console.log('--------------');
