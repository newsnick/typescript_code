// inside class or object.
// 1. directly creating object.
var Student = /** @class */ (function () {
    function Student() {
        this.studentId = 1;
        this.name = 'John';
        this.marks = 80;
    }
    Student.prototype.getResult = function () {
        if (this.marks > 35) {
            console.log("Student Details - id: ".concat(this.studentId, ", Name: ").concat(this.name));
            console.log('Student Pass');
        }
        else {
            console.log("Student Details - id: ".concat(this.studentId, ", Name: ").concat(this.name));
            console.log('Student Fail');
        }
    };
    return Student;
}());
var student = new Student();
student.getResult();
