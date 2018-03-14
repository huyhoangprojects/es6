'use strict';

var nameVar = 'Hoang';
var nameVar = 'Huy';
console.log('nameVar', nameVar);

var nameLet = 'Hung';
// let nameLet = 'Phan'; error
nameLet = 'Phan';
console.log('nameLet', nameLet);

var nameConst = 'Kiên';
// const nameConst= 'Trung'; error
// nameConst = 'Trung'; error
console.log('nameConst', nameConst);

var fullName = 'Hoang Phan';

if (fullName) {
  var firstName = fullName.split(" ")[0];
  var firstNameLet = fullName.split(" ")[0];
  var firstNameConst = fullName.split(" ")[0];
  console.log('var', firstName);
  console.log('let', firstNameLet);
  console.log('const', firstNameConst);
}

console.log(firstName);
// console.log('let', firstNameLet); error
// console.log('const', firstNameConst); error
