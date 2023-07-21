// function overloading
// by changing datatypes of parameters.
class Converter {
  // convert(value: number): string;
  // convert(value: string): number;

  convert(value: number | string): number | string {
    if (typeof value === 'number') {
      return value.toString()
    } else {
      return parseInt(value)
    }
  }
}

const converter = new Converter()
console.log(converter.convert(42)) // Output: "42"
console.log(converter.convert('42')) // Output: 42
