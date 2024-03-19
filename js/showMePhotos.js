// <!-- Шаблон изображения случайного пользователя -->
// <template id="picture">
//   <a href="#" class="picture">
//     <img class="picture__img" src="" width="182" height="182" alt="Случайная фотография">
//     <p class="picture__info">
//       <span class="picture__comments"></span>
//       <span class="picture__likes"></span>
//     </p>
//   </a>
// </template>

import { arePhotoArray } from './arePhotoArray';


const photoTemplate = document.querySelector('#picture').content.querySelector('.picture');
const picturesElement = document.querySelector('.pictures');
const photosFragment = document.createDocumentFragment();

const photos = arePhotoArray();

const renderingThumbnails = () => {
  photos.forEach(({id, url, description, likes, comments}) => {
    const photoThumbnails = photoTemplate.cloneNode(true);
    photoThumbnails.dataset.pictureId = id;
    const image = photoThumbnails.querySelector('.picture__img');
    image.src = url;
    image.alt = description;
    photoThumbnails.querySelector('.picture__likes').textContent = likes;
    photoThumbnails.querySelector('.picture__comments').textContent = comments.length;
    photosFragment.appendChild(photoThumbnails);
  });
  picturesElement.appendChild(photosFragment);
};

export {photos, renderingThumbnails};
