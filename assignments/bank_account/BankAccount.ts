class BankAccount {
  private accountNumber: number
  private balance: any
  private customerName: string

  constructor(accountNumber: number, balance: any, customerName: string) {
    this.accountNumber = accountNumber
    this.balance = balance
    this.customerName = customerName
  }

  private getBalance(): any {
    return this.balance
  }

  protected updateBalance(amount: any): void {
    this.balance += amount
  }
}

class CurrentAccount extends BankAccount {
  constructor(accountNumber: number, balance: any, customerName: string) {
    super(accountNumber, balance, customerName)
  }

  deposit(amount: any): void {
    this.updateBalance(amount)
    console.log(
      `Deposit of ${amount} successful. New balance: ${this.getBalance()}`
    )
  }

  withdrawal(amount: any): void {
    if (amount <= this.getBalance()) {
      this.updateBalance(-amount)
      console.log(
        `Withdrawal of ${amount} successful. New balance: ${this.getBalance()}`
      )
    } else {
      console.log(`Insufficient balance. Current balance: ${this.getBalance()}`)
    }
  }

  balanceEnquiry(): void {
    console.log(`Account balance: ${this.getBalance()}`)
  }
}

const account = new CurrentAccount(123456, 1000, 'John Doe')
account.deposit(500)
account.withdrawal(200)
account.balanceEnquiry()
account.withdrawal(2000)
