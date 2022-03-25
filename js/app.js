
//////////////////////////////////////////API PELICULAS////////////////////////////////////////////////

const peliculas = document.getElementById('peliculas');

document.addEventListener('DOMContentLoaded', e => {
    fetchData()
})

const fetchData = async() => {
    try {

        const res = await fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&page=1&api_key=00daf3621762e52f67716efd33b0cb9b')
        const data = await res.json()
        console.log(data);
        pintarPeliculas(data);
        
    } catch (error) {
        console.log(error)
    }
}


const pintarPeliculas = data => {
    let elementos = '';
 
    console.log('1',data.results[0].adult);

    for (let i = 0; i < data.results.length; i++) {
        console.log(data.results[i].title)

        elementos += `
            <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 mt-3 ">
              <div class="card">
                <img src="https://image.tmdb.org/t/p/original${data.results[i].poster_path}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${data.results[i].title}</h5>
                  <p class="card-text">Puntuacion: ${data.results[i].vote_average} </p>
                  <a href="pelicula.html?idpelicula=${data.results[i].id}" class="btn btn-primary">Ver detalle</a>
                </div>
              </div>
            </div>
          `


    }

    peliculas.innerHTML = elementos;
}



