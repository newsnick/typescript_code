var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BankAccount = /** @class */ (function () {
    function BankAccount(accountNumber, balance, customerName) {
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.customerName = customerName;
    }
    BankAccount.prototype.getBalance = function () {
        return this.balance;
    };
    BankAccount.prototype.updateBalance = function (amount) {
        this.balance += amount;
    };
    return BankAccount;
}());
var CurrentAccount = /** @class */ (function (_super) {
    __extends(CurrentAccount, _super);
    function CurrentAccount(accountNumber, balance, customerName) {
        return _super.call(this, accountNumber, balance, customerName) || this;
    }
    CurrentAccount.prototype.deposit = function (amount) {
        this.updateBalance(amount);
        console.log("Deposit of ".concat(amount, " successful. New balance: ").concat(this.getBalance()));
    };
    CurrentAccount.prototype.withdrawal = function (amount) {
        if (amount <= this.getBalance()) {
            this.updateBalance(-amount);
            console.log("Withdrawal of ".concat(amount, " successful. New balance: ").concat(this.getBalance()));
        }
        else {
            console.log("Insufficient balance. Current balance: ".concat(this.getBalance()));
        }
    };
    CurrentAccount.prototype.balanceEnquiry = function () {
        console.log("Account balance: ".concat(this.getBalance()));
    };
    return CurrentAccount;
}(BankAccount));
var account = new CurrentAccount(123456, 1000, 'John Doe');
account.deposit(500);
account.withdrawal(200);
account.balanceEnquiry();
account.withdrawal(2000);
