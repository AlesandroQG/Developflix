import peliculas from './peliculas.js'

const base_url = "https://image.tmdb.org/t/p/w500";

const lista_accion = document.getElementById("genero-28");
const lista_thriller = document.getElementById("genero-53");
const lista_aventura = document.getElementById("genero-12");

const accion = peliculas.filter((pelicula) => {
    return pelicula.genre_ids.includes(28)
});
accion.forEach((pelicula) => {
    const contenedor = `<div class="pelicula">
    <img src="${base_url + pelicula.poster_path}">
    <h2>${pelicula.title}</h2>
    </div>`;
    lista_accion.innerHTML += contenedor;
});

const thriller = peliculas.filter((pelicula) => {
    return pelicula.genre_ids.includes(53)
});
thriller.forEach((pelicula) => {
    const contenedor = `<div class="pelicula">
    <img src="${base_url + pelicula.poster_path}">
    <h2>${pelicula.title}</h2>
    </div>`;
    lista_thriller.innerHTML += contenedor;
});

const aventura = peliculas.filter((pelicula) => {
    return pelicula.genre_ids.includes(12)
});
aventura.forEach((pelicula) => {
    const contenedor = `<div class="pelicula">
    <img src="${base_url + pelicula.poster_path}">
    <h2>${pelicula.title}</h2>
    </div>`;
    lista_aventura.innerHTML += contenedor;
});
