// Creating objects using class
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
var student1 = new Student();
student1.studentId = 4;
student1.name = 'John';
student1.marks = 80;
var student2 = new Student();
student1.studentId = 12;
student2.name = 'Dave';
student2.marks = 20;
student1.getResult();
student2.getResult();
