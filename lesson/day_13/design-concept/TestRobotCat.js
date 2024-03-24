const BatteryRobotCat = require("./BatteryRobotCat");
const Charger = require("./Charger");
const SolarRobotCat = require("./SolarRobotCat");

const batteryRobotCat = new BatteryRobotCat();
const solarRobotCat = new SolarRobotCat();

Charger.charge([batteryRobotCat, solarRobotCat]);