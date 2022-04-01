`use strict`;

const modifyToUpper = (item) => {
    const firstChar = item.substring(0, 1).toUpperCase();
    const otherChar = item.substring(1, item.length).toLowerCase();
    return firstChar + otherChar;
}

const convertString = prompt('Введите строку:');

console.log(`Результат: ${modifyToUpper(convertString)}`);
