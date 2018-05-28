class Account {

    constructor (balance) { 
      this.balance = balance;
    }

  deposit(number) {
    return (balance = balance += number)
  }

  withdraw(number) {
    return (balance = balance -= number)
  }

  printStatement () {
    
  }
}