// Add imports above this line
import { galleryItems } from './gallery-items';
// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

const gallery = document.querySelector(".gallery")
addMarkUp()

const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250});

function addMarkUp() {
    const markup = galleryItems.map(({ preview, original, description }) => `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
    </li>`).join("")

    gallery.insertAdjacentHTML("beforeend", markup)
}
