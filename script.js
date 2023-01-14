'use strict';

const personalMovieDb = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: () => {
        personalMovieDb.count = +prompt("How much films have you seen?", "");
    
        while (personalMovieDb.count == "" || personalMovieDb.count == null || isNaN(personalMovieDb.count)) {
            personalMovieDb.count = +prompt("How much films have you seen?", "");
        }
    },
    rememberMyFilms: () => {
        for (let i = 0; i < 2; i++) {
            const   a = prompt ("Last film you have saw?", ""),
                    b = prompt ("Your rating?", "");
        
            if (a != null && b != null && a != "" && b != "" && a.length < 50) {
                    personalMovieDb.movies[a] = b;
                    console.log("done!");
            } else {
                    console.log("error");
                    i--;
            }     
        }
    },
    detectPersonalLevel: () => {
        if (personalMovieDb.count < 10) {
            alert("Просмотрено довольно мало фильмов");
        } else if (personalMovieDb.count >= 10 && personalMovieDb.count <= 30) {
            alert("Вы классический зритель");
        } else if (personalMovieDb.count > 30) {
            alert("Вы киноман");
        } else {
            alert("Произошла ошибка");
        }
    },
    showMyDB: (hidden) => {
        if (!hidden) {
            console.log(personalMovieDb);
        }
    },
    writeYourGenres: () => {
        for (let i = 1; i <= 3; i++) {
            personalMovieDb.genres[i - 1] = prompt(`Type Your favorite genre ${i}`);
        }
    }
};

