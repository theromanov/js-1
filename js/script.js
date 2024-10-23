"use strict";

// const numberOfFilms = +prompt('Скільки ви переглянли фільмів?');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };


// const a = prompt('Один з останніх переглянутих фільмів?'),
//     b = +prompt('На скільки оцінити його?'),
//     c = prompt('Один з останніх переглянутих фільмів?'),
//     d = +prompt('На скільки оцінити його?');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;


// console.log(personalMovieDB);



// if (num < 49) {
//     console.log('Брехня')
// } else if (num > 100) {
//     console.log('Забагато!')
// } else if (num === 50) {
//     console.log('Перемога!')
// }



let result = '';

for (let i = 0; i <= 5; i++) {
    for (let j = 0; j < 5 - i; j++) {
        result += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
        result += "*";
    }
    result += "\n";
}

console.log(result);

