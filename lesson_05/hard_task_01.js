`use strict`;

const foo = (x, y) => {
    if (y === 0) 
        return x;
    return foo(y, x % y);
}

const x = +prompt('Число x: ');
const y = +prompt('Число y: ');

console.log(`Наибольший общий делитель: ${foo(x, y)}`);
