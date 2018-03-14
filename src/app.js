var nameVar = 'Hoang';
var nameVar = 'Huy';
console.log('nameVar', nameVar);

let nameLet = 'Hung';
// let nameLet = 'Phan'; error
nameLet = 'Phan';
console.log('nameLet', nameLet);

const nameConst= 'Kiên';
// const nameConst= 'Trung'; error
// nameConst = 'Trung'; error
console.log('nameConst', nameConst);

var fullName = 'Hoang Phan';

if (fullName) {
  var firstName = fullName.split(" ")[0];
  let firstNameLet = fullName.split(" ")[0];
  const firstNameConst = fullName.split(" ")[0];
  console.log('var', firstName);
  console.log('let', firstNameLet);
  console.log('const', firstNameConst);
}

console.log(firstName);
// console.log('let', firstNameLet); error
// console.log('const', firstNameConst); error
