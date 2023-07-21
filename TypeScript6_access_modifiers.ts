// access modifiers
// public(default), private , protected
class Employee {
  protected employeeId: number
  private salary: number

  constructor(employeeId: number, salary: number) {
    this.employeeId = employeeId
    this.salary = salary
  }

  protected calculateBonus(): number {
    return this.salary * 0.1 // 10% bonus
  }

  private deductTax(): number {
    return this.salary * 0.2 // 20% tax deduction
  }

  public displayEmployeeInfo(): void {
    console.log(`Employee ID: ${this.employeeId}`)
    console.log(`Salary: $${this.salary}`)
    console.log(`Bonus: $${this.calculateBonus()}`)
    console.log(`Tax Deduction: $${this.deductTax()}`) // Error: Property 'deductTax' is private and only accessible within the class 'Employee'
  }
}

class Manager extends Employee {
  private teamSize: number

  constructor(employeeId: number, salary: number, teamSize: number) {
    super(employeeId, salary)
    this.teamSize = teamSize
  }

  public displayManagerInfo(): void {
    this.displayEmployeeInfo() // Accessing protected member from the base class
    // console.log("Tax : "+this.deductTax());  // could not access if deductTax is private.
    console.log(`Team Size: ${this.teamSize}`)
  }
}

// Usage
const employee = new Employee(1, 5000)
employee.displayEmployeeInfo() // Output: Employee ID: 1, Salary: $5000, Bonus: $500

const manager = new Manager(2, 8000, 10)
manager.displayManagerInfo() // Output: Employee ID: 2, Salary: $8000, Bonus: $800, Team Size: 10
