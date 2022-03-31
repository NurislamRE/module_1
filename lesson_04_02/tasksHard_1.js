`use strict`;

{
    const incomeTotal = +prompt(`Напишите свой доход:`);

    if (incomeTotal < 15000) {
        console.log(`Сумма налога: ${incomeTotal * 0.13}`);
    }

    else if (incomeTotal >= 15000 && incomeTotal < 50000) {
        console.log(`Сумма налога: ${incomeTotal * 0.2}`);
    }

    else {
        console.log(`Сумма налога: ${incomeTotal * 0.3}`);
    }
}