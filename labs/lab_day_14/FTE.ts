import Employee from "./Employee";

export default class FTE extends Employee{
    constructor(name:string){
        super(name, 50000);

    }

    getSupportSalary(): number {
        return 500;
    }

    getSalary(): number {
        return this.salary;
    }
}