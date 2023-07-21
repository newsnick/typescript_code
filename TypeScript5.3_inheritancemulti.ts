// Inheritance
// Multilevel Inheritance
class Person {
  name: string
  constructor(name: string) {
    this.name = name
  }
  greet(): void {
    console.log(`Hello , My name is ${this.name}`)
  }
}

class Student extends Person {
  rollNumber: number
  constructor(name: string, rollNumber: number) {
    super(name)
    this.rollNumber = rollNumber
  }
  study(): void {
    console.log(`Student ${this.name} is studying`)
  }
}

class CollegeStudent extends Student {
  collegeName: string
  constructor(name: string, rollNumber: number, collegeName: string) {
    super(name, rollNumber)
    this.collegeName = collegeName
  }
  enroll(): void {
    console.log(
      `Student ${this.name} with roll number ${this.rollNumber} in college : ${this.collegeName}`
    )
  }
}
// const person  =  new Person("Timmy");
// person.greet();
const collegeStudent = new CollegeStudent('John', 1234, 'XYZ College')
collegeStudent.greet()
collegeStudent.study()

// Implement access modifiers
// public(default), private , protected
