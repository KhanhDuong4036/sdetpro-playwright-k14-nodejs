import BankAccount from "./BankAccount";

export default class SavingAccount extends BankAccount{


    getBalance(): number {
        return this.balance;
    }

    withdraw(amount: number): void {
        if(amount > this.balance){
            throw new Error(`The amount is higher than balance`);
        } else if(amount <= this.balance){
            this.balance = this. balance - amount;
        }
    }

    deposit(amount: number): number {
        this.balance = this.balance + amount;
        return this.balance;
    }
    

}