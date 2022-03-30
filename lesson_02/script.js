'use strict';
{
    const productName = prompt('Наименование товара:');
    const productCount = +prompt('Количество товара:');
    const productCategory = prompt('Категория товара:');
    const productPrice = +prompt('Цена товара:');
    
    console.log(typeof productName);
    console.log(typeof productCount);
    console.log(typeof productCategory);
    console.log(typeof productPrice);    
}