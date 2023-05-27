// Add imports above this line
import { galleryItems } from './gallery-items';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import '.././css/01-gallery.css';

const galleryItemsEl = document.querySelector('.gallery');
const cardMarkup = createGalleryItem(galleryItems);
galleryItemsEl.insertAdjacentHTML('beforeend', cardMarkup);

function createGalleryItem(galleryItems) {
  const markup = galleryItems
    .map(({ preview, original, description }) => {
      return `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>
    </li>`;
    })
    .join('');
  return markup;
}

const lightbox = new SimpleLightbox('.gallery a', {
  /* options */
  captionsData: 'alt',
  captionDelay: 250,
});
