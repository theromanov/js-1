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


console.log(personalMovieDB)


