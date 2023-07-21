// Association and POTO Object
class Person {
  private name: string
  private address: Address

  constructor(name: string, street: string, city: string, state: string) {
    this.name = name
    this.address = new Address(street, city, state)
  }

  public getName(): string {
    return this.name
  }

  public getAddress(): Address {
    return this.address
  }
}

class Address {
  private street: string
  private city: string
  private state: string

  constructor(street: string, city: string, state: string) {
    this.street = street
    this.city = city
    this.state = state
  }

  public getStreet(): string {
    return this.street
  }

  public getCity(): string {
    return this.city
  }

  public getState(): string {
    return this.state
  }
}

const person = new Person('John Doe', '123 Main St', 'Cityville', 'Stateville')

// Accessing the Person's name and address
console.log(`Name: ${person.getName()}`)
console.log(
  `Address: ${person.getAddress().getStreet()}, ${person
    .getAddress()
    .getCity()}, ${person.getAddress().getState()}`
)
