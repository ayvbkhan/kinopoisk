const favMoviesList = JSON.parse(localStorage.getItem('favMovies'))

const favMoviesContainer = document.body.querySelector('.fav-movies-container')

favMoviesList.forEach((favMovie, index) => {

    const cardElementTemplate = `
    <div class="card" style="width: 20rem" data-card-id="${index}">
        <img
        src="${favMovie.Poster}"
        class="card-img-top"
        alt="${favMovie.Title} movie poster"
        />
        <div class="card-body">
            <h5 class="card-title">${favMovie.Title}</h5>
            <p class="card-text">${favMovie.Plot}</p>
            <div class="d-flex flex-column gap-2">
                <a
                href="#"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                >
                Подробнее
                </a>
                <a
                    href="#"
                    class="btn btn-danger remove-button"
                    >
                    Удалить из избранного
                </a>
            </div>
        </div>
    </div>`

    favMoviesContainer.insertAdjacentHTML('beforeend', cardElementTemplate)

    const removeFavMovieButton = favMoviesContainer.children[favMoviesContainer.children.length - 1].querySelector('.remove-button')
    
    removeFavMovieButton.addEventListener('click', () => {
        const movieIdToDelete = Number(removeFavMovieButton.parentElement.parentElement.parentElement.dataset.cardId)

        favMoviesList.splice(movieIdToDelete, 1)

        localStorage.setItem('favMovies', JSON.stringify(favMoviesList))

        removeFavMovieButton.parentElement.parentElement.parentElement.remove(); 
    
    }) 

    
    const moreInfoButton = favMoviesContainer.children[favMoviesContainer.children.length - 1].querySelector('.btn-primary');

    moreInfoButton.addEventListener('click', () => {
    const modalBody = document.querySelector('.modal-body');
    modalBody.innerHTML = ''; 

    const favMovie = favMoviesList[index];

    let modalBodyTemplate = `<div class="infoContainer" data-card-id="${index}">
                <div>
                <img src="${favMovie.Poster}">
                </div>
            <div>
                <h3>${favMovie.Title}</h3>
                <div>Year: ${favMovie.Year}</div>
                <div>Rated: ${favMovie.Rated}</div>
                <div>Released: ${favMovie.Released}</div>
                <div>Runtime: ${favMovie.Runtime}</div>
                <div>Genre: ${favMovie.Genre}</div>
                <div>Director: ${favMovie.Director}</div>
                <div>Writer: ${favMovie.Writer}</div>
                <div>Actors: ${favMovie.Actors}</div>
                <div>Plot: ${favMovie.Plot}</div>
                <div>Language: ${favMovie.Language}</div>
                <div>Country: ${favMovie.Country}</div>
                <div>Awards: ${favMovie.Awards}</div>
                <div>Metascore: ${favMovie.Metascore}</div>
                <div>imdbRating: ${favMovie.imdbRating}</div>
                <div>imdbVotes: ${favMovie.imdbVotes}</div>  
                <div>imdbID: ${favMovie.imdbID}</div>  
                <div>Type: ${favMovie.Type}</div>  
                <div>DVD: ${favMovie.DVD}</div>  
                <div>BoxOffice: ${favMovie.BoxOffice}</div>  
                <div>Production: ${favMovie.Production}</div>  
                <div>Website: ${favMovie.Website}</div>  
                <div>Response: ${favMovie.Response}</div>  
            </div>
        </div>`;

    modalBody.insertAdjacentHTML('beforeend', modalBodyTemplate);
  });
    
});