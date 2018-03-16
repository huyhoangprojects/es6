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

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDesc() {
    let desc = this.description();
    if(this.hasMajor()) {
      desc += ` Their major is ${this.major}`;
    }
    return desc;
  }
}

class Traveller extends Person {
  constructor(name, lived) {
    super(name);
    this.lived = lived;
  }
  hasLived() {
    return !!this.lived;
  }
  greet() {
    let hello = super.greeting();
    if(this.hasLived) {
      hello += ` I'm visiting from ${this.lived}.`;
    }
    return hello;
  }
}

const me = new Traveller('Huy Hoang Phan', 'Binh Dinh');
console.log(me.greet());

const other = new Student();
console.log(other.getDesc());

