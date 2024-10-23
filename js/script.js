"use strict";

const numberOfFilms = prompt('Скільки ви переглянли фільмів?');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


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


if (personalMovieDB.count < 10) {
    console.log('Переглянуто досить мало фільмів')
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вам подобається дивитися фільми!')
} else if (personalMovieDB.count > 30) {
    console.log('Ви кіноман!')
}


console.log(personalMovieDB);



