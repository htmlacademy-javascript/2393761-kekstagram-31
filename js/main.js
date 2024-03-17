
import {arePhotoArray} from './arePhotoArray.js';
import { renderPhotos } from './showMePhotos.js';
import { openBigPicture } from './render-photo.js';


const photos = arePhotoArray();
renderPhotos(photos);


// openBigPicture(photos);


// нажили клик
renderPhotos.addEventListener('click', (evt) => {
  // проверили тот ли элемент
  const currentPictureNode = evt.target.closest('.picture');

  // если тот элемент то вызвали функцию
  if(currentPictureNode){
    evt.preventDefault();
    openBigPicture(currentPictureNode.dataset.pictureId);
  }

});
