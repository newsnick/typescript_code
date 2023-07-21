// Inheritance
// Single Inheritance
class Shape {
  area: number
  constructor(area: number) {
    this.area = area
  }
}
class Circle extends Shape {
  constructor(area: number) {
    super(area)
  }
  display(): void {
    console.log('Area of Circle : ' + this.area)
  }
}
var obj = new Circle(320)
obj.display()
