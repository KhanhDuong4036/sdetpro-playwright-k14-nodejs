import Contractor from "./Contractor";
import Employee from "./Employee";
import FTE from "./FTE";

export default class EmployeeController {
    static getTotalSalary(employeeList: Employee[]): number {
        let totalSalary = 0;
        employeeList.forEach(employee => {
            if (employee instanceof FTE) {
                totalSalary = totalSalary + employee.getSalary() + employee.getSupportSalary();
            }
        })
        return totalSalary;
    }

    static getHighestSalaryEmployee(employeeList: Employee[]): Employee {
        let highestSalary = employeeList[0];
        employeeList.forEach(employee => {
            if (employee.getSalary() > highestSalary.getSalary()) {
                highestSalary = employee;
            }
        })
        return highestSalary;
    }
}