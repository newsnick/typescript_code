//enum reference use in student class.
enum CourseName {
  TypesScript,
  Nodejs,
  react,
  java_script,
  HTMLCSS,
}
class Student {
  name: string
  id: number
  course: CourseName
  constructor(name: string, id: number, course: CourseName) {
    this.name = name
    this.id = id
    this.course = course
  }
}
let student = new Student('Timmy', 123, CourseName.TypesScript)
console.log('Student Name:', student.name)
console.log('Student id:', student.id)
console.log('Student course:', CourseName[student.course])
