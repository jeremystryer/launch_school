function makeBank() {
  let accounts = [];

  function makeAccount(number) {
    let balance = 0;
    let transactions = [];

    return {
      deposit(amount) {
        balance += amount;
        transactions.push({type: 'deposit', amount})
        return amount;
      },

      withdraw(amount) {
        if (balance - amount < 0) {
          amount = balance;
        }
        balance -= amount;
        transactions.push({type: 'withdraw', amount})
        return amount;
      },

      number() {
        return number;
      },

      balance() {
        return balance;
      },

      transactions() {
        return transactions;
      },
    };
  }

  return {
    openAccount() {
      let number = accounts.length + 101;
      let newAccount = makeAccount(number);
      accounts.push(newAccount);
      return newAccount;
    },

    transfer(sourceAccount, destinationAccount, amount) {
      sourceAccount.withdraw(amount);
      destinationAccount.deposit(amount);
      return amount;
    }

  };
}

let bank = makeBank();
console.log(bank.accounts);
// undefined
