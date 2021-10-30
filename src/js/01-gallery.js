
import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';

    
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line


const gallery = document.querySelector('.gallery');
gallery.innerHTML = createMarkup(galleryItems);
gallery.addEventListener('click', onImgClick);


function createMarkup(items) {
    return items.map(({ preview, original, description }) => {
        return `<a href="${original}" class="gallery__item">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
    }).join('');
}
console.log(gallery);

function onImgClick(evt) {
    evt.preventDefault();

    if (evt.target.nodeName !== 'IMG') {
        return;
    }
    
}

new SimpleLightbox('.gallery a',
    {
        captionsData: "alt",
        captionPosition: 'bottom',
        captionDelay: '250',
        focus: false,
        
    });

  