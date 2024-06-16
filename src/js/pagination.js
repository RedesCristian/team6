import { fetchPosters } from './apifetch.js';
let currentPage = 1;
let totalPages = 1;
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
document.querySelector('.prev').addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    fetchPosters(currentPage);
  }
});
document.querySelector('.next').addEventListener('click', () => {
  if (currentPage < totalPages) {
    currentPage++;
    fetchPosters(currentPage);
  }
});
document.querySelectorAll('.page-btn').forEach(button => {
  if (button.dataset.shown) return; // Skip step buttons
  button.addEventListener('click', () => {
    const page = parseInt(button.id.split('-')[1], 10);
    currentPage = page;
    fetchPosters(currentPage);
  });
});
const isValidPage = () => {
  const validPaths = ['/index.html', '/', '/team6/', '/team6/index.html'];
  return validPaths.some(
    path =>
      window.location.pathname === path ||
      window.location.pathname.startsWith(path + '/')
  );
};
if (isValidPage() && !window.location.pathname.includes('/my-library.html')) {
  fetchPosters(currentPage);
}
