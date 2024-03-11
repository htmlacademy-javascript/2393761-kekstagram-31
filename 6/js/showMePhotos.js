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

// import {arePhotoArray} from './arePhotoArray.js';
const pictures = document.querySelector('.pictures');
const template = document.querySelector('#picture').content.querySelector('.picture');

const fragment = document.createDocumentFragment();

const renderPhoto = (photo) => {
  const thumbnail = template.cloneNode(true);

  const image = thumbnail.querySelector('.picture__img');

  image.src = photo.url;
  image.alt = photo.description;

  thumbnail.querySelector('.picture__comments').textContent = photo.comments.length;
  thumbnail.querySelector('.picture__likes').textContent = photo.likes;
  return thumbnail;
};

const renderPhotos = (objects) => {
  for (let i = 0; i < objects.length; i++) {
    fragment.appendChild(renderPhoto(objects[i]));
  }
  pictures.appendChild(fragment);
};

export { renderPhotos };
