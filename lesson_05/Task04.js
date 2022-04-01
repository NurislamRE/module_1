`use strict`;

const calculate = (totalSum, count, promocode) => {
    let discountSum = totalSum;

    if (count > 10) {
        discountSum -= discountSum * 0.03;
    }

    if (totalSum > 30000) {
        discountSum -= (discountSum - 30000) * 0.15;
    }

    if (promocode === 'METHED') {
        discountSum -= discountSum * 0.1;
    }

    else if (promocode === 'G3H2Z1') {
        if (discountSum > 2000) {
            discountSum -= discountSum - 500;
        }
        
    }

    return discountSum;
}

const totalSum = +prompt('Введите сумму:');
const count = +prompt('Введите количество:');
const promocode = prompt('Введите промокод:');

console.log(`Стоимость корзины: ${calculate(totalSum, count, promocode)}`);
