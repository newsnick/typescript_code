//function overloading in typescript
// by changing number of parameters.
class Calculator {
  // add(a: number, b: number): number;
  // add(a: number, b: number, c: number): number;
  add(a: number, b: number, c?: number): number {
    if (c !== undefined) {
      return a + b + c
    } else {
      return a + b
    }
  }
}

const calculator = new Calculator()
console.log(calculator.add(2, 3))
console.log(calculator.add(2, 3, 4))
