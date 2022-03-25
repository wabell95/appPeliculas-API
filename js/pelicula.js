const pelicula = document.getElementById('pelicula');

const query = new URLSearchParams(window.location.search)
const param = query.get('idpelicula')




document.addEventListener('DOMContentLoaded', e => {
    fetchData()
})

const fetchData = async() => {
    try {

        const res = await fetch(`https://api.themoviedb.org/3/movie/${param}?api_key=00daf3621762e52f67716efd33b0cb9b`)
        const data = await res.json()
        pintarPelicula(data);
    } catch (error) {
        console.log(error)
    }
}


const pintarPelicula = data => {
    let elemento = '';
 
    console.log(data);


          elemento = `

          <div class="card mb-6">
          <div class="row g-0">
            <div class="col-md-4">
              <img src="https://image.tmdb.org/t/p/original${data.poster_path}" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
              <div class="card-body">
              <h1 class="card-title">${data.title}</h1>
                <p class="card-text"> <strong>Puntuacion:</strong> ${data.vote_average}</p>
                <p class="card-text">Sinopsis: ${data.overview}</p>
                <p class="card-text">Fecha de estreno: ${data.release_date}</p>
                <p class="card-text">Calificacion: ${data.adult ? "Adultos" : "Todo publico"}</p>
              </div>
            </div>
          </div>
        </div>
        `

    pelicula.innerHTML = elemento;
}








