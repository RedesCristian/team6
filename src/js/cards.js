import axios from 'axios';

const gallery = document.querySelector('.galleryPopular');

async function fetchPosters() {
  const API_KEY = '904cc36a32d92a605c14a646cc21fc67';
  const URL = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1d&api_key=${API_KEY}`;

  try {
    const response = await axios.get(URL);
    const { results } = response.data;

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
    .map(({ poster_path, original_title, genre_ids, release_date }) => {
      const formattedGenres = genre_ids.map(id => genreMap[id]).join(', ');
      const releaseYear = release_date.split('-')[0];

      return `
          <div class="div-poster">
           <a href="${BASE_IMG_URL + poster_path}">
            <img class="poster-card" src="${
              BASE_IMG_URL + poster_path
            }" alt="Photo" loading="lazy" />
            </a>
            <div class="info">
              <p class="info-title">${original_title}</p>
              <p class="info-genre-year">${formattedGenres} | ${releaseYear} </p>
          </div>
          </div>
        `;
    })
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);
}
