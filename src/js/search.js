import axios from 'axios';
import Notiflix from 'notiflix';
import { renderGallery } from './cards.js';
const API_KEY = '904cc36a32d92a605c14a646cc21fc67';
document.addEventListener('DOMContentLoaded', () => {
  const searchForm = document.querySelector('.header-form');
  const searchInput = searchForm.querySelector('.header-form__input');
  searchForm.addEventListener('submit', async e => {
    e.preventDefault();
    const searchQuery = searchInput.value.trim();
    if (searchQuery === '') {
      return;
    }
    try {
      const URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
        searchQuery
      )}`;
      const response = await axios.get(URL);
      const { results } = response.data;
      renderGallery(results);
    } catch (error) {
      console.error('Error fetching movies:', error);
      Notiflix.Notify.failure(
        'Failed to fetch movies. Please try again later.'
      );
    }
  });
});
