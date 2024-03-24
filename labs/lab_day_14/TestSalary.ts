import Contractor from "./Contractor";
import EmployeeController from "./EmployeeController";
import FTE from "./FTE";


let khanh = new FTE("khanh");
let hanh = new FTE("hanh");
let mi = new Contractor("mi");

const totalSalary = EmployeeController.getTotalSalary([khanh, hanh, mi]);
const highetSalary = EmployeeController.getHighestSalaryEmployee([khanh, hanh, mi]);
console.log(`Total salary is ${totalSalary}`);
console.log(`Highest salary is ${JSON.stringify(highetSalary)}`);
