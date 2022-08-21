// Add imports above this line
import { galleryItems } from './gallery-items';

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import "../css/common.css";
import "../css/01-gallery.css";

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryList(galleryItems);


galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup)

function createGalleryList(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `
            <div class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img
                        class="gallery__image"
                        src="${preview}"
                        data-source="${original}"
                        alt="${description}"
                    />
                </a>
            </div>
            `;
        })
        .join('');
}



const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionType: "alt",
    captionDelay: 250,
});

