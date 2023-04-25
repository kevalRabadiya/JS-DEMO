// var isEven = (ele) => {
//     return ele % 2 === 0;
// }

// var demo = [2, 4, 10, 6].every(isEven);
// console.log(demo);

// var x = 1;
// a();
// b();
// console.log(x);

// function a() {
//     var x = 14;
//     console.log(x);
// }

// function b() {
//     var x = 100;
//     console.log(x);
// }


// function addition(x) {
//     return function (y) {
//         return x + y;
//     }
// }
// var x = addition(10);
// console.log(x(6));

var arr = [4, 3, 5, 7, 9];

const ans = arr.reduce((acc, curr) => {
    acc = acc + curr;
    return acc;
}, 0);

console.log(ans);

const filterdemo = arr.filter((x) => {
    return x > 3;
})
console.log(filterdemo);

const mapdemo = arr.map((value, key) => {
    return value * key;
})
console.log(mapdemo)