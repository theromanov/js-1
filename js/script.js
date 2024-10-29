"use strict";


const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB = +prompt('Скільки фільмів ви уже переглянули?', '');

        while (personalMovieDB == '' || personalMovieDB == null || isNaN(personalMovieDB)) {
            personalMovieDB = +prompt('Скільки фільмів ви уже переглянули?', '');
        }
    },

    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один з останніх переглянутих фільмів?', ''),
                b = prompt('На скільки оціните його?', '');

            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('Done');
            } else {
                console.log('Error')
                i--;
            }
        }
    },

    detectNewLevels: function () {
        if (personalMovieDB.count < 10) {
            console.log('Ви переглянули доволі мало фільмів')
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Ви переглянули достатньо багато фільмів!')
        } else if (personalMovieDB.count > 30) {
            console.log('Ви кіноман!')
        } else {
            console.log('Відбулася помилка!')
        }
    },

    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },

    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i < 2; i++) {
            // personalMovieDB.genres[i - 1] = prompt(`Ваш улюблений жанр під номером ${i}`);

            // if (genre === '' || genre == null) {
            //     console.log('Ви ввели некоректні дані');
            //     i--;
            // } else {
            //     personalMovieDB.genres[i - 1] = genre;

            // }

            let genres = prompt('Введіть ваші улюблені жанри через кому');

            if (genres === '' || genres == null) {
                console.log('Ви ввели некоректні дані');
                i--;
            } else {
                personalMovieDB.genres = genres.split();
                personalMovieDB.genres.sort();
            }
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Улюблений жанр ${i + 1} - це ${item}`);
        })
    }
};


