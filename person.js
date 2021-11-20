// const person = {
//   name: 'John Doe',
//   age: 30,
// }

// Module Wrapper Function
// (function (exports, require, module, __filename, __dirname) {

// })

// console.log(__dirname, __filename)

class Person {
  constructor (name, age) {
    this.name = name
    this.age = age
  }

  greeting() {
    console.log(`My name is ${this.name} & my age is ${this.age}.`)
  }
}

module.exports = Person
