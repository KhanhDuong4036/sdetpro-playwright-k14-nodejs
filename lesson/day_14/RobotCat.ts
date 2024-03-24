export class RobotCat {

    protected name: string;
    protected id: number

    constructor(name: string, id: number){
        this.name = name;
        this.id = id;
        
    }

    setId(id: number): void {
        this.id= id;
    }

    getId(): number{
        return this.id;
    }

    charge(){
        return 'charging...';
    }

}

