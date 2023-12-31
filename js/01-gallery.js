import { galleryItems } from './gallery-items.js';
// Change code below this line

const container = document.querySelector('.gallery')

function createMarkup(arr) {
    return arr.map(({ preview, original, description }) => 
`<li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" data-source="${original}">
    </a>
</li>`).join('')
}

container.insertAdjacentHTML('beforeend', createMarkup(galleryItems))
container.addEventListener("click", handlerGalleryClick);

// function handlerGalleryClick(evt) {
//     evt.preventDefault();
//     if (evt.target === evt.currentTarget) {
//         return;
//     }
//     // console.log(evt.target);
    
// //     const currentImgUrl = evt.target.dataset.source;
// //     const instance = basicLightbox.create(`
// // <img src="${currentImgUrl}" alt="" width="1280" height="auto"/>`)
// //     instance.show();

// //     container.addEventListener('keydown', (evt) => {
// //         if (evt.code === "Escape") {
// //             instance.close();
// //         }
// //     })
// }

const instance = basicLightbox.create(
  `<img width="1280" height="auto" src="">`,
  {
    onShow: (instance) => {
      document.addEventListener('keydown', onEscKeyPress);
    },
    onClose: (instance) => {
      document.removeEventListener('keydown', onEscKeyPress);
    },
  }
);

function handlerGalleryClick(evt) {
  evt.preventDefault();
  const datasetSource = evt.target.dataset.source;
  if (!datasetSource) return;
  instance.element().querySelector('img').src = datasetSource;
  instance.show();
}

function onEscKeyPress(evt) {
  if (evt.code !== 'Escape') return;
  instance.close();
}