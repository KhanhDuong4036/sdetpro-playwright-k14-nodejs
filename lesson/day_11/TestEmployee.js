const Employee = require('./Employee');
const SalaryController = require('./SalaryController');

const teo = new Employee(50000);
const ti = new Employee(40000);

const salaryController = new SalaryController();
const totalSalary = salaryController.getTotalSalary([teo, ti]);
console.log(totalSalary);
