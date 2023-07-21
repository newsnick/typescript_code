// Interface Implementations.
// The child class can implement the interface with “implements” keyword.
// All the methods of interface is by default, "public"
// One class can implement multiple interfaces

interface Printable {
  print(): void
}

interface Loggable {
  log(message: string): void
}

class Documents implements Printable, Loggable {
  print(): void {
    console.log('Printing documents...')
  }

  log(message: string): void {
    console.log(`Logging: ${message}`)
  }
}

const doc = new Documents()
doc.print()
doc.log('Document processed successfully.')
