"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Скільки ви переглянли фільмів?');

    while (numberOfFilms === '' || numberOfFilms === null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Скільки ви переглянли фільмів?');
    }
}

start();


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 1; i++) {
        const a = prompt('Один з останніх переглянутих фільмів?'),
            b = prompt('На скільки оцінити його?');
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('Done!')
        } else {
            console.log('Error!');
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Переглянуто доволі мало фільмів')
    } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
        console.log('Ви переглянули багато фільмів!')
    } else if (personalMovieDB.count >= 30) {
        console.log('Ви кіноман!')
    } else {
        console.log('Відбулася помилка!')
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш улюблений жанр під номером ${i} `);
    }
}

writeYourGenres();