`use strict`;

const convertEuroToRubl = (money) => {
    return money * 1.2 * 73;
}

const value = +prompt('Введите стоимость:');

console.log(`Результат: ${convertEuroToRubl(value)}`);
