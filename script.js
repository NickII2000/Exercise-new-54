'use strict';

const box = document.querySelector('.box');
const block = document.querySelector('.block');

console.log(block);
// if (block) {
//     console.log(block.textContent);
// }

// console.log(block?.textContent);

console.log(1 + 2);

const userData = {
    name: 'Nick',
    age: null,
    skills: {
        js: 99,
    },
    say: function () {
        console.log('Hello');
    },
};

userData.say();
userData.hey?.();
console.log(userData?.skills?.js);