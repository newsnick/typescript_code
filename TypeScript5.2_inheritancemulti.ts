// Inheritance
// Multilevel Inheritance
class Person {
  protected name: string

  constructor(name: string) {
    this.name = name
  }

  public greet(): void {
    console.log(`Hello, My name is ${this.name}`)
  }
}

class Student extends Person {
  private rollNumber: number

  constructor(name: string, rollNumber: number) {
    super(name)
    this.rollNumber = rollNumber
  }

  public study(): void {
    console.log(`Student ${this.name} is studying`)
  }
}

class CollegeStudent extends Student {
  private collegeName: string

  constructor(name: string, rollNumber: number, collegeName: string) {
    super(name, rollNumber)
    this.collegeName = collegeName
  }

  public enroll(): void {
    console.log(
      `Student ${this.name} with roll number ${this.rollNumber} in college: ${this.collegeName}`
    )
  }
}

const collegeStudent = new CollegeStudent('John', 1234, 'XYZ College')
collegeStudent.greet()
collegeStudent.study()
collegeStudent.enroll()
