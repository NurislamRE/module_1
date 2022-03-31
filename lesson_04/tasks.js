'use strict';

////Вторая задача:
{
    const rain = Math.round(Math.random());

    if (rain === 1) {
        console.log(`Пошёл дождь. Возьмите зонт!`);
    }
    else {
        console.log(`Дождя нет!`);
    }
}
////Третья задача:
{
    const firstExam = +prompt(`Введите кол-во баллов по математике:`);
    const secondExam = +prompt(`Введите кол-во баллов по русскому языку:`);
    const thirdExam = +prompt(`Введите кол-во баллов по информатике:`);

    if ((firstExam + secondExam + thirdExam) >= 265) {
        console.log(`Поздравляю, вы поступили на бюджет!`);
    }
    else {
        console.log(`К сожалению, вы набрали недостаточно баллов!`);
    }
}
////Четвёртая задача:
{
    const moneyTotal = prompt(`Cколько денег хотите снять?`);

    if (moneyTotal % 100 === 0) {
        console.log(`Запрощенная сумма - ${moneyTotal}. Пожалуйста, заберите деньги!`);
    }
    else {
        console.log(`К сожалению, банкомат не может дать эту сумму!`);
    }
}