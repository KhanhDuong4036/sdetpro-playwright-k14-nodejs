import SavingAccount from "./SavingAccount";

const savingAccount = new SavingAccount();
console.log(`Before depositing: ${savingAccount.getBalance()}`);
savingAccount.deposit(1000);
console.log('==============');
console.log(`After depositing: ${savingAccount.getBalance()}`);
savingAccount.withdraw(500);
console.log(`After withdrawing: ${savingAccount.getBalance()}`);
savingAccount.withdraw(500);
console.log(`After withdrawing: ${savingAccount.getBalance()}`);




