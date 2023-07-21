// object, class, property, method,reference variables.
// var keyword is not required while creating variable
// inside class or object.

// 1. Creating object using class.

class Student {
  studentId: number = 1
  name: string = 'John'
  marks: number = 80

  getResult(): void {
    if (this.marks > 35) {
      console.log(`Student Details - id: ${this.studentId}, Name: ${this.name}`)
      console.log('Student Pass')
    } else {
      console.log(`Student Details - id: ${this.studentId}, Name: ${this.name}`)
      console.log('Student Fail')
    }
  }
}

const student = new Student()
student.getResult()
