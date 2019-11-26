function Person({ firstName, lastName }) {
  this.firstName = firstName;
  this.lastName = lastName
}

Person.prototype.sayHello = function sayHello() {
  console.log('Hello');
}

Person.prototype.greeting = function greeting() {
  this.sayHello();
  console.log(`My name is ${this.name}`);
}

const person = new Person({})
// console.log(person.sayHello())

function Engineer({
  industry,
  skills
}) {

}

// Engineer.prototype

const engineerAnton = new Engineer({
  firstName: 'Anton',
  lastName: 'Honcharuk',
  skills: [
    'creativity',
    'analytical skills'
  ],
  industry: 'Automobile Manufacturing'
});

// engineerAnton.greeting();
