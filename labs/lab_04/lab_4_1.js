const readLine = require('readline-sync');

let firstAccount = {
    accountName: 'Khanh Duong',
    accountNumber: '4036',
    routingNumber: '868686',
    balance: 10000000
}

let secondAccount = JSON.parse(JSON.stringify(firstAccount));
secondAccount.accountNumber = '2041';
secondAccount.balance = 20000000;
secondAccount.accountName = 'Hanh Le';

const accountUser = [firstAccount, secondAccount];
let isContinue = true;
while (isContinue) {
    printUserMenu();
    let userOption = getUserOption();
    switch (userOption) {
        case '0':
            console.log('Thank you! See you later');
            isContinue = false;
            break;
        case '1':
            let foundAccount = findAccount();
            showAccountProfile(foundAccount);
            break;
        case '2':
            updateBalance();
            break;
        default:
            console.log('Invalid option, please try again');
            break;
    }

}

function getUserOption() {
    return readLine.question('Please select an option: ');
}

function printUserMenu() {
    console.log('==== Banking Application ====');
    console.log('1. Find an account');
    console.log('2. Update balance');
    console.log('0. Exit the program');
}

function findAccount() {
    let userAccountNumber = readLine.question('Enter account number: ');
    for (const account of accountUser) {
        if (account.accountNumber === userAccountNumber) {
            return account;
        }
    }
    return null;
}

function showAccountProfile(account) {
    if (account == null || account == undefined) {
        console.log('Your account is not exist!');
    } else {
        console.log('Your account: ', account.accountName);
        console.log('Your balance: ', account.balance);

    }
}

function updateBalance() {
    let foundAccount = findAccount();
    if (foundAccount != null) {
        showAccountProfile(foundAccount);
        let withdrawMoney = readLine.question('Enter your money you want to withdraw: ')
        if (isNaN(withdrawMoney)) {
            console.log('The system accepts the number!');
        }

        if (withdrawMoney <= foundAccount.balance) {
            foundAccount.balance -= withdrawMoney;
            console.log('Withdraw successfully. Your current balance is: ', foundAccount.balance);
        } else {
            console.log('Your balance is not enough to withdraw. Please check again!');
        }
    } else {
        console.log('Your account is not exist!');
    }


}