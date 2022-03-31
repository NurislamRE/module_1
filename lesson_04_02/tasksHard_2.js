`use strict`;

{
    const incomeTotal = +prompt(`Напишите свой доход:`);
    const sumTo15000 = 15000 * 0.13;
    const sumTo50000 = sumTo15000 + (50000 - 15000) * 0.2;


    if (incomeTotal < 15000) {
        console.log(`Сумма налога: ${incomeTotal * 0.13}`);
    }

    else if (incomeTotal >= 15000 && incomeTotal < 50000) {
        console.log(`Сумма налога: ${sumTo15000 + (incomeTotal - 15000) * 0.2}`);
    }

    else {
        console.log(`Сумма налога: ${sumTo50000 + (incomeTotal - 50000) * 0.3}`);
    }
}