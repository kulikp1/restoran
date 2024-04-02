const images = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
];

const gallery = document.querySelector(".cook-content");

const createGallery = arr => {
  return arr
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery-item">
          <a class="gallery-link" href="${original} download="false" ">
            <img
              class="gallery-image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
             />
          </a>
        </li>`
    )
    .join('');
};

gallery.innerHTML = createGallery(images);

const handleClick = event => {
  event.preventDefault();

  const target = event.target;
  if (target.nodeName !== 'IMG') return;

  const largeImageURL = target.dataset.source;
  const descriptionCurrent = target.alt;
  console.log(largeImageURL);
  console.log(descriptionCurrent);

  const instance = basicLightbox.create(
    `<div class="modal">
    <img src="${largeImageURL}", alt="${descriptionCurrent}">
    </div>`
  );
  instance.show();
};
gallery.addEventListener('click', handleClick);