import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEL = document.querySelector ('.gallery');
galleryEL.addEventListener("click", onImgHandler)

const galleryIsReady = galleryItems.map((item) => 
`<a class="gallery__link" href="${item.original}" target="_self"><img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}"/></a>`).join("");
    
galleryEL.insertAdjacentHTML("beforeend", galleryIsReady);

function onImgHandler (e) {
    e.preventDefault()
    if (e.target.nodeName !== 'IMG' ){return}
    const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width = "1200">`,
{
    onShow: () => window.addEventListener('keydown', onPressESC),
    onClose: () => window.addEventListener('keydown', onPressESC),
}
);
instance.show()
function onPressESC(e) {
    if (e.code === 'Escape') {
        instance.close()
    }
}
    }

