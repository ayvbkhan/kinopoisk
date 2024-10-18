const API_KEY = "d403047e"

async function fetchData(title) {
  const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&t="${title}"`)
  const data = await response.json()
  return data
}

const searchInputElement = document.querySelector('#movie-search-input')
const searchButtonElement= document.querySelector('#movie-search-button')

let movieTitleValue = ''

searchButtonElement.addEventListener('click', async () => {
  movieTitleValue = searchInputElement.value
  const movie = await fetchData(movieTitleValue)

  const cardElementTemplate = `
  <div class="card" style="width: 18rem">
      <img
      src="${movie.Poster}"
      class="card-img-top"
      alt="${movie.Title} movie poster"
      />
      <div class="card-body">
          <h5 class="card-title">${movie.Title}</h5>
          <p class="card-text">${movie.Plot}</p>
          <a
              href="#"
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              >
              Подробнее
          </a>
      </div>
  </div>`
  
  const searchResultsContainer = document.querySelector('.search-results')

  searchResultsContainer.innerHTML = ''; 
  
  searchResultsContainer.insertAdjacentHTML('beforeend', cardElementTemplate)

  const modalBody = document.querySelector('.modal-body');

  modalBody.innerHTML = ''; 

  let modalBodyTemplate = `<div class="infoContainer">
                <div>
                <img src="${movie.Poster}">
                </div>
            <div>
                <h3>${movie.Title}</h3>
                <div>Year: ${movie.Year}</div>
                <div>Rated: ${movie.Rated}</div>
                <div>Released: ${movie.Released}</div>
                <div>Runtime: ${movie.Runtime}</div>
                <div>Genre: ${movie.Genre}</div>
                <div>Director: ${movie.Director}</div>
                <div>Writer: ${movie.Writer}</div>
                <div>Actors: ${movie.Actors}</div>
                <div>Plot: ${movie.Plot}</div>
                <div>Language: ${movie.Language}</div>
                <div>Country: ${movie.Country}</div>
                <div>Awards: ${movie.Awards}</div>
                <div>Metascore: ${movie.Metascore}</div>
                <div>imdbRating: ${movie.imdbRating}</div>
                <div>imdbVotes: ${movie.imdbVotes}</div>  
                <div>imdbID: ${movie.imdbID}</div>  
                <div>Type: ${movie.Type}</div>  
                <div>DVD: ${movie.DVD}</div>  
                <div>BoxOffice: ${movie.BoxOffice}</div>  
                <div>Production: ${movie.Production}</div>  
                <div>Website: ${movie.Website}</div>  
                <div>Response: ${movie.Response}</div>  
            </div>
        </div>`;

 modalBody.insertAdjacentHTML('beforeend', modalBodyTemplate)      
})