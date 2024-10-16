"use strict";

const numberOfFilms = +prompt('Скільки фільмів ви уже подивилися?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    geners: [],
    privat: false
};


const a = prompt('Один з останніх переглянутих фільмів?', ''),
    b = prompt('На скільки оціните його?', ''),
    c = prompt('Один з останніх переглянутих фільмів?', ''),
    d = prompt('На скільки оціните його?', ''),
    e = prompt('Які Ваші улюблені актори?'),
    f = prompt('На скільки б оцінили їхні вміння?')


personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
personalMovieDB.actors[e] = f;

console.log(personalMovieDB);
