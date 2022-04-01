`use strict`;

const modifyToReverse = (item) => {
    return item.split('').reverse().join('');
}

const convertString = prompt('Введите строку:');

console.log(`Результат: ${modifyToReverse(convertString)}`);
