function asyncFunction01(param1) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            const returnedValue = 'asyncFunction01: ' + param1;
            resolve(returnedValue);
        }, 1000)
    });

}
function asyncFunction02(param2) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            const returnedValue = 'asyncFunction02: ' + param2;
            resolve(returnedValue);
        }, 1000)
    });

}

function asyncFunction03(param3) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            const returnedValue = 'asyncFunction03: ' + param3;
            resolve(returnedValue);
        }, 1000)
    });

}

/**
 * async: asynchronous function indicator -> Chuong trinh xu ly bat dong bo
 * await: to wait result from an async function.
 * await is only valid in async functions and the top level bodies of modules
 */

async function run(){
    const returnedValue1 = await asyncFunction01('param1');
    const returnedValue2 = await asyncFunction02(returnedValue1);
    const finalValue = await asyncFunction03(returnedValue2);
    console.log(finalValue);
}