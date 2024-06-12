import axios from 'axios';

const gallery = document.querySelector('.galleryPopular');

async function fetchPosters() {
  const API_KEY = '904cc36a32d92a605c14a646cc21fc67';
  const URL = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1d&api_key=${API_KEY}`;

  try {
    const response = await axios.get(URL);
    const { results } = response.data;
    console.log(response.data);

    renderGallery(results);
  } catch (error) {
    console.error(error);
  }
}

fetchPosters();

const genreMap = {
  28: 'Action',
  12: 'Adventure',
  16: 'Animation',
  35: 'Comedy',
  80: 'Crime',
  99: 'Documentary',
  18: 'Drama',
  10751: 'Family',
  14: 'Fantasy',
  36: 'History',
  27: 'Horror',
  10402: 'Music',
  9648: 'Mystery',
  10749: 'Romance',
  878: 'Science Fiction',
  10770: 'TV Movie',
  53: 'Thriller',
  10752: 'War',
  37: 'Western',
};

function renderGallery(posters) {
  const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';

  const markup = posters
    .map(({ id, poster_path, original_title, genre_ids, release_date }) => {
      const formattedGenres = genre_ids.map(id => genreMap[id]).join(', ');
      const releaseYear = release_date.split('-')[0];

      return `
                <div class="div-poster">
                    <a href="#" data-id="${id}" class="poster-link">
                        <img class="poster-card" src="${
                          BASE_IMG_URL + poster_path
                        }" alt="Photo" loading="lazy" />
                    </a>
                    <div class="info">
                        <p class="info-title">${original_title}</p>
                        <p class="info-genre-year">${formattedGenres} | ${releaseYear}</p>
                    </div>
                </div>
            `;
    })
    .join('');

  gallery.innerHTML = markup;

  document.querySelectorAll('.poster-link').forEach(poster => {
    poster.addEventListener('click', async event => {
      event.preventDefault();
      const id = event.currentTarget.getAttribute('data-id');
      await openModal(id);
    });
  });
}

async function openModal(id) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=904cc36a32d92a605c14a646cc21fc67`
  );
  const movieData = await response.json();

  const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';

  const modalContent = `
        <div class="cards-modal-content">
            <span class="cards-modal-close-button">&times;</span>
            <img class="cards-modal-poster-card" src="${
              BASE_IMG_URL + movieData.poster_path
            }" alt="Photo" loading="lazy" />
            <div class="cards-modal-div-info">
                <h2 class="cards-modal-title">${movieData.title}</h2>
                <div class="cards-modal-details">
                    <span class="label">Vote / Votes</span>
                    <span class="value">${movieData.vote_average} / ${
    movieData.vote_count
  }</span>
                </div>
                <div class="cards-modal-details">
                    <span class="label">Popularity</span>
                    <span class="value">${movieData.popularity}</span>
                </div>
                <div class="cards-modal-details">
                    <span class="label">Original Title</span>
                    <span class="value">${movieData.original_title}</span>
                </div>
                <div class="cards-modal-details">
                    <span class="label">Genre</span>
                    <span class="value">${movieData.genres
                      .map(genre => genre.name)
                      .join(', ')}</span>
                </div>
                <div class="cards-modal-about">
                    <span class="label">About</span>
                    <span class="value">${movieData.overview}</span>
                </div>
                <div class="cards-modal-buttons">
                    <button class="cards-modal-button watch">ADD TO WATCHED</button>
                    <button class="cards-modal-button queue">ADD TO QUEUE</button>
                </div>
            </div>
        </div>
    `;

  const modal = document.createElement('div');
  modal.classList.add('cards-modal-modal');
  modal.innerHTML = modalContent;
  document.body.appendChild(modal);
  modal.style.display = 'block';

  const closeModal = () => {
    modal.style.display = 'none';
    document.body.removeChild(modal);
    document.removeEventListener('keydown', escHandler);
  };

  modal
    .querySelector('.cards-modal-close-button')
    .addEventListener('click', closeModal);

  window.addEventListener('click', event => {
    if (event.target == modal) {
      closeModal();
    }
  });

  const escHandler = event => {
    if (event.key === 'Escape') {
      closeModal();
    }
  };

  document.addEventListener('keydown', escHandler);
}
