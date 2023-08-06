import { galleryItems } from './gallery-items.js';
// Change code below this line

const container = document.querySelector('.gallery')

function createMarkup(arr) {
    return arr.map(({ preview, original, description }) => 
`<li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" data-source="${original}" width="340">
    </a>
</li>`).join('')
}

container.insertAdjacentHTML('beforeend', createMarkup(galleryItems))
container.addEventListener("click", handlerGalleryClick);

function handlerGalleryClick(evt) {
    evt.preventDefault();
    if (evt.target === evt.currentTarget) {
        return;
    }
    // console.log(evt.target);
    const currentImgUrl = evt.target.dataset.source;
    const instance = basicLightbox.create(`
<img src="${currentImgUrl}" alt="" width="1280" height="auto"/>`)
    instance.show();

    container.addEventListener('keydown', (evt) => {
        if (evt.code === "Escape") {
            instance.close();
        }
    })
}
