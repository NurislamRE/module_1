'use strict';
{
    const productName = prompt('Наименование товара:');
    const productCount = +prompt('Количество товара:');
    const productCategory = prompt('Категория товара:');
    const productPrice = +prompt('Цена товара:');
    
    console.log('productNameType', typeof productName);
    console.log('productCountType', typeof productCount);
    console.log('productCategoryType', typeof productCategory);
    console.log('productPriceType', typeof productPrice);    

    console.log(`На складе ${productCount} единицы товара ${productName} на сумму ${productCount * productPrice} ${productCategory}`);
}