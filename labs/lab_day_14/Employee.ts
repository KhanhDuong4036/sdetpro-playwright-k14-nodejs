export default abstract class Employee {
    protected name: string;
    protected salary: number;
    protected supportSalary: number = 0;

    constructor(name: string, salary:number){
        this.name = name;
        this.salary = salary;
    }
    getName(): string{
        return this.name;
    }
    
    abstract getSalary(): number

    abstract getSupportSalary(): number;
}