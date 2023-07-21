// Creating object directly.

const student = {
  studentId: 1,
  name: 'John',
  marks: 80,
  getResult(): void {
    if (this.marks > 35) {
      console.log(`Student Details - id: ${this.studentId}, Name: ${this.name}`)
      console.log('Student Pass')
    } else {
      console.log(`Student Details - id: ${this.studentId}, Name: ${this.name}`)
      console.log('Student Failed.')
    }
  },
}

student.getResult()
