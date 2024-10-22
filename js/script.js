"use strict";

const numberOfFilms = +prompt('Скільки ви переглянли фільмів?');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


const a = prompt('Один з останніх переглянутих фільмів?'),
    b = +prompt('На скільки оцінити його?'),
    c = prompt('Один з останніх переглянутих фільмів?'),
    d = +prompt('На скільки оцінити його?');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;


console.log(personalMovieDB);



if (num < 49) {
    console.log('Брехня')
} else if (num > 100) {
    console.log('Забагато!')
} else if (num === 50) {
    console.log('Перемога!')
}

const num = 50;

switch (num = 50) {
    case 49:
        console.log('не вірно');
        break;
    case 100:
        console.log('Забагато!');
        break;
    case 51:
        console.log('Все правильно!');
        break;
    default:
        console.log('Не в цей раз!');
        break;
}

