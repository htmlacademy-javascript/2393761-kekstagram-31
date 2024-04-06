import { renderingThumbnails } from './rendering-thumbnails.js';
import { openModalBigPicture } from './modal-picture.js';
import { initUploadModal } from './image-upload-form.js';
import { closePhotoEditor } from './image-upload-form.js';
import { setUserFormSubmit } from './image-upload-form.js';
import { getData } from './api.js';
import { showErrorMessage } from './messages.js';
import { loadingImage } from './loading-image.js';
import { configFilter } from './filters.js';

getData().then((photos) => {
  renderingThumbnails(photos);
  configFilter(photos);
}).catch((error) => {
  showErrorMessage(error.message);
});

setUserFormSubmit(closePhotoEditor);
openModalBigPicture();
initUploadModal();
loadingImage();
