// Creating objects using class with different properties.

class Student {
  studentId: number
  name: string
  marks: number

  getResult(): void {
    if (this.marks > 35) {
      console.log(`Student Details - id: ${this.studentId}, Name: ${this.name}`)
      console.log('Student Pass')
    } else {
      console.log(`Student Details - id: ${this.studentId}, Name: ${this.name}`)
      console.log('Student Failed.')
    }
  }
}

const student1 = new Student()
student1.studentId = 34
student1.name = 'John'
student1.marks = 80

const student2 = new Student()
student2.studentId = 45
student2.name = 'Timmy'
student2.marks = 20

student1.getResult()
student2.getResult()
