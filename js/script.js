import peliculas from './peliculas.js';

console.log(peliculas);

function filtrarPeliculas(genre_id) {
    const img_base_url = "https://image.tmdb.org/t/p/w500";
    const template = (pelicula) => {
        return `<div class="pelicula">
            <img src="${img_base_url + pelicula.poster_path}" alt="${pelicula.title}">
            <h3>${pelicula.title}</h3>
        </div>`;
    };
    const filtradas = peliculas.filter((pelicula) => pelicula.genre_ids.includes(genre_id));
    const lista = document.getElementById(`genero-${genre_id}`);
    lista.innerHTML = filtradas.map((pelicula) => template(pelicula)).join("");
}

filtrarPeliculas(28); // Acción
filtrarPeliculas(53); // Thriller
filtrarPeliculas(12); // Aventura
