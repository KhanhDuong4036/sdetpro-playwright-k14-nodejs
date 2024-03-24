import { RobotCat } from "./RobotCat";

export default class SolarRobotCat extends RobotCat{
    charge(): string {
        
        return super.charge() + "Charging with solar circuit..."
    }
}

