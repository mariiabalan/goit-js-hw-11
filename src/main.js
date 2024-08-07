import { fetchImages } from './js/pixabay-api.js';
import { renderImages, clearGallery } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";


const form = document.querySelector('#search-form');
const input = form.querySelector('input[name="searchQuery"]');
const gallery = document.querySelector('.gallery');
const loader = document.getElementById('loader');
let lightbox = new SimpleLightbox('.gallery a');
let page = 1;

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const query = input.value.trim();

    if (!query) {
        iziToast.error({
            title: 'Error',
            message: 'Please enter a search query!',
        });
        return;
    }

    clearGallery();
    loader.classList.remove('hidden');

    fetchImages(query, page)
        .then(data => {
            loader.classList.add('hidden');

            if (data.hits.length === 0) {
                iziToast.warning({
                    title: 'No Results',
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                });
                return;
            }

            renderImages(data.hits);
            lightbox.refresh();
        })
        .catch(error => {
            loader.classList.add('hidden');
            iziToast.error({
                title: 'Error',
                message: 'Failed to fetch images. Please try again later.',
            });
            console.error('Error fetching images:', error);
        });
});