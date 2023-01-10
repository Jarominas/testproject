'use strict';

const numberOfFilms = +prompt("How much films have you seen?", "");

const personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


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

if (personalMovieDb.count < 10) {
    alert("Просмотрено довольно мало фильмов");
} else if (personalMovieDb.count >= 10 && personalMovieDb.count <= 30) {
    alert("Вы классический зритель");
} else if (personalMovieDb.count > 30) {
    alert("Вы киноман");
} else {
    alert("Произошла ошибка");
}

console.log(personalMovieDb);
