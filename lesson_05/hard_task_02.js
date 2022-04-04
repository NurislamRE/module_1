`use strict`;

const getMin = (x, y) => {
    const z = (x + y) / 2;

    const min = z + (x - y)/2;
    const max = z - (x - y)/2;
    return min;
}

const x = +prompt('Число x: ');
const y = +prompt('Число y: ');

console.log(`Минимальное число: ${getMin(x, y)}`);
