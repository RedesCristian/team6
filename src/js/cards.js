import { openModal } from './modal.js';
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
const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';
const gallery = document.querySelector('.galleryPopular');
export function renderGallery(posters) {
  const markup = posters
    .map(({ id, poster_path, original_title, genre_ids, release_date }) => {
      const formattedGenres = genre_ids.map(id => genreMap[id]).join(', ');
      const releaseYear = release_date ? release_date.split('-')[0] : '';
      return `
         <div class="div-poster">
           <a href="#" data-id="${id}" class="poster-link">
             <img class="poster-card" src="${
               BASE_IMG_URL + poster_path
             }" alt="${original_title}" loading="lazy" />
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
  // Adăugare event listener pentru fiecare poster-link
  document.querySelectorAll('.poster-link').forEach(poster => {
    poster.addEventListener('click', async event => {
      event.preventDefault();
      const id = event.currentTarget.getAttribute('data-id');
      await openModal(id);
    });
  });
}
export function updatePaginationButtons(page) {
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  const pageButtons = document.querySelectorAll('.page-btn');
  prevButton.disabled = page === 1;
  nextButton.disabled = page === totalPages;
  pageButtons.forEach(button => {
    if (button.dataset.shown) return; // Skip step buttons
    const pageNum = parseInt(button.id.split('-')[1], 10);
    button.classList.toggle('active', pageNum === page);
  });
}
