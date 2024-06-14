import './js/carousel';
import './js/footer.js';
import './js/dark-mode';

import axios from 'axios';
import Notiflix from 'notiflix';

const galleryLibrary = document.querySelector('.galleryLibrary');

document.querySelector('.watched-btn').addEventListener('click', () => {
  galleryLibrary.innerHTML = '';
  displayMovies('watched');
});

document.querySelector('.queue-btn').addEventListener('click', () => {
  galleryLibrary.innerHTML = '';
  displayMovies('queue');
});

function displayMovies(section) {
  const movies = JSON.parse(localStorage.getItem(section)) || [];
  const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';

  if (movies.length === 0) {
    Notiflix.Notify.info(`No movies in ${section.toUpperCase()}`);
    return;
  }

  const markup = movies
    .map(movie => {
      return `
      <div class="div-poster">
      <a href="#" data-id="${movie.id}" class="poster-link">
        <img class="poster-card" src="${
          BASE_IMG_URL + movie.poster_path
        }" alt="${movie.title}" loading="lazy" />
        </a>
        <div class="info">
          <p class="info-title">${movie.title}</p>
          <p class="info-genre-year">${movie.genres
            .map(genre => genre.name)
            .join(', ')} | ${movie.release_date.split('-')[0]}</p>
        </div>
      </div>
    `;
    })
    .join('');

  galleryLibrary.innerHTML = markup;

  document.querySelectorAll('.poster-link').forEach(poster => {
    poster.addEventListener('click', async event => {
      event.preventDefault();
      const id = event.currentTarget.getAttribute('data-id');
      await openModal(id);
    });
  });
}

import { openModal } from './js/cards.js';
