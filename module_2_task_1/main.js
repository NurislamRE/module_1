'use strict';

const liTwo = document.querySelector('.item_two');
const liThree = document.querySelector('.item_three');
const liFour = document.querySelector('.item_four');
const liFive = document.querySelector('.item_five');
const liSix = document.querySelector('.item_six');

liThree.after(liFour);

const cloneTitleTwo = liTwo.querySelector('.item__title').cloneNode(true);
liTwo.querySelector('.item__title').replaceWith(liFive.querySelector('.item__title').cloneNode(true));
liFive.querySelector('.item__title').replaceWith(liSix.querySelector('.item__title').cloneNode(true));
liSix.querySelector('.item__title').replaceWith(cloneTitleTwo);

const propsListTwo = liTwo.querySelector('.props__list');
const propsListThree = liThree.querySelector('.props__list');
const propsListFour = liFour.querySelector('.props__list');
const propsListFive = liFive.querySelector('.props__list');
const propsListSix = liSix.querySelector('.props__list');

propsListFour.querySelectorAll('.props__item_four')[2].append(propsListTwo.querySelector('.props__item_four'));
propsListTwo.querySelectorAll('.props__item_two')[7].append(propsListSix.querySelectorAll('.props__item_two')[0], propsListSix.querySelectorAll('.props__item_two')[1]);

propsListThree.replaceWith(propsListFive.cloneNode(true));
propsListFive.replaceWith(propsListThree.cloneNode(true));

