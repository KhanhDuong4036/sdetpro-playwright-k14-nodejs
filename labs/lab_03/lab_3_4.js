const foo = [1, 12, 16, 28, 34];
const bar = [1, 13, 16, 27, 99];
const mergeArray = merge(foo, bar);

const fooLength = foo.length;
const barLength = bar.length;
let fooPosition = 0;
let barPosition = 0;
let mergePosition = 0;

console.log("foo: ", foo);
console.log("bar: ", bar);
console.log("merge: ", mergeArray);

function merge(foo, bar) {
    const merge = [];
    const fooLength = foo.length;
    const barLength = bar.length;
    let fooPosition = 0;
    let barPosition = 0;
    let mergePosition = 0;
    while (fooPosition < fooLength && barPosition < barLength) {
        const fooValue = foo[fooPosition];
        const barValue = bar[barPosition];
        if (fooValue <= barValue) {
            merge[mergePosition] = fooValue;
            mergePosition++;
            fooPosition++;
        } else {
            merge[mergePosition] = barValue;
            mergePosition++;
            barPosition++;
        }
    }

    while (fooPosition < fooLength) {
        merge[mergePosition++] = foo[fooPosition++];

    }
    while (barPosition < barLength) {
        merge[mergePosition++] = bar[barPosition++];
    }
    return merge;
}