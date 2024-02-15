// CRUD
/**
 * Map includes key + value
 * Differ with Object
 * key - Object - String.
 * key - Map - anything type of Data
 * KEY is NOT DUPLICATED - it will get the new value
 */
let emergencyList = new Map();
emergencyList.set('113', 'Police Dept');
emergencyList.set('114', 'Fire Dept');
emergencyList.set('115', 'Hospital');
emergencyList.set('116', 'Others');

// READ
console.log(emergencyList.get('113'));
console.log(`Is 113 key existing? ${emergencyList.has('113')}`);

// Loop the map's entried via keys
for (const key of emergencyList.keys()) {

    console.log(`${key} ${emergencyList.get(key)}`);

}

// Loop the map's entried via keys
for (const value of emergencyList.values()) {

    console.log(`value: ${value}`);
}
// Transform MAP (Iterator) to ARRAY
console.log('==== Iterator | keys ====');
console.log(Array.from(emergencyList.keys())[1]);
console.log(`Map size: ${emergencyList.size}`);
emergencyList.delete('115');
printTheMap(emergencyList);

function printTheMap(emergencyList){
    for (const key of emergencyList.keys()) {

        console.log(`${key} ${emergencyList.get(key)}`);
    
    }
}


