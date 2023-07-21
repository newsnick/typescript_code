// we can not create multiple constructors in TS.
class Student {
  studentId: number
  name: string
  marks: number

  constructor(studentId: number, name: string, marks: number) {
    this.studentId = studentId
    this.name = name
    this.marks = marks
  }

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

const student1 = new Student(34, 'John', 80)
const student2 = new Student(40, 'Timmy', 20)

student1.getResult()
student2.getResult()
