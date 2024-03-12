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


const renderPhotos = (photos) => {
  const photoTemplate = document.querySelector('#picture').content.querySelector('.picture');
  const picturesElement = document.querySelector('.pictures');
  const photosFragment = document.createDocumentFragment();

  photos.forEach(({url, description, likes, comments}, i) => {
    const photoElement = photoTemplate.cloneNode(true);
    const pictureElement = photoElement.querySelector('.picture__img');
    const likesElement = photoElement.querySelector('.picture__likes');
    const commentElement = photoElement.querySelector('.picture__comments');

    photoElement.setAttribute('data-photo-id', i);
    pictureElement.src = url;
    pictureElement.alt = description;
    likesElement.textContent = likes;
    commentElement.textContent = comments.length;
    photosFragment.appendChild(photoElement);
  });
  picturesElement.appendChild(photosFragment);
};
export {renderPhotos};


// const pictures = document.querySelector('.pictures');
// const template = document.querySelector('#picture').content.querySelector('.picture');

// const fragment = document.createDocumentFragment();

// const renderPhoto = (photo) => {
//   const thumbnail = template.cloneNode(true);

//   const image = thumbnail.querySelector('.picture__img');

//   image.src = photo.url;
//   image.alt = photo.description;

//   thumbnail.querySelector('.picture__comments').textContent = photo.comments.length;
//   thumbnail.querySelector('.picture__likes').textContent = photo.likes;
//   return thumbnail;
// };

// const renderPhotos = (objects) => {
//   for (let i = 0; i < objects.length; i++) {
//     fragment.appendChild(renderPhoto(objects[i]));
//   }
//   pictures.appendChild(fragment);
// };
