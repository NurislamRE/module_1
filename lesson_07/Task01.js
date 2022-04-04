'use strict';

const filter = (all, forDelete) => {
    let all_ = all;
    for (let i = 0; i < forDelete.length; i++) {
        all_ = all_.filter(item => item !== forDelete[i]);
    }
    return all_; 
}

const allStudents = ['Lampard', 'Gerrard', 'Zidan', 'Ronaldo', 'Messi', 'Mbappe',];
const failedStudents = ['Lampard', 'Zidan', 'Messi',];
console.log(filter(allStudents, failedStudents));