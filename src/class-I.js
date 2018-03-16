class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }
  greeting() {
    return `I'm ${this.name}!`;
  }
  description() {
    return `${this.name} is ${this.age} year(s) old.`
  }
}

const me = new Person('Huy Hoang Phan', 26);
console.log(me.name);
console.log(me.description());

const other = new Person();
console.log(other.name);
console.log(other.description());