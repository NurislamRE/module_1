`use strict`;

// const getMin = (x, y) => {
//     const z = (x + y) / 2;

//     const min = z + (x - y)/2;
//     const max = z - (x - y)/2;
//     return min;
// }
const findMin = (x,y) => y + ((x-y) & ((x-y) >> 31));
const x = +prompt('Число x: ');
const y = +prompt('Число y: ');

console.log(`Минимальное число: ${findMin(x, y)}`);

