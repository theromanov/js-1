"use strict";

// To string

// 1)
console.log(typeof (String(null)));
console.log(typeof (String(true)));

// Конкатенація.

// 2)
console.log(typeof (undefined + ''))

const num = 5;

console.log("https://vk.com/catalog/" + num);


const fontSize = 26 + 'px';

console.log(fontSize);

//To Number

// 1)
console.log(typeof (Number('4')));

// 2)
console.log(typeof (+'4'));

// 3
console.log(typeof (parseInt("15px", 10)));

let answ = +prompt("hello world", "");


//To Boolean

// 1)

let switcher = null;

if (switcher) {
    console.log('Working...')
}

switcher = 1;

if (switcher) {
    console.log('Working...')
}

// 2)

console.log(typeof (Boolean(5)))

// 3)

console.log(typeof (!!'4444'))