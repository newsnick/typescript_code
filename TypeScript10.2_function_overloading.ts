// function overloading
// by changing no of parameters.
class Calculator2 {
  add(a: number, b?: number, c?: number): number {
    if (b !== undefined && c !== undefined) {
      return a + b + c
    } else if (b !== undefined) {
      return a + b
    } else {
      return a
    }
  }
}

const calculator2 = new Calculator2()
console.log(calculator2.add(2, 3)) // Output: 5
console.log(calculator2.add(2, 3, 4)) // Output: 9
