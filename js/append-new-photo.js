const imgUploadElement = document.querySelector('.img-upload');
const imgUploadInputElement = imgUploadElement.querySelector('.img-upload__input');
const imgUploadOverlayElement = imgUploadElement.querySelector('.img-upload__overlay');
const imgUploadPreviewContainerElement = imgUploadOverlayElement.querySelector('.img-upload__preview-container');
const imgUploadPreviewElement = imgUploadPreviewContainerElement.querySelector('.img-upload__preview');
const imgPreviewElement = imgUploadPreviewElement.querySelector('img');
const imgUploadEffectsElement = imgUploadOverlayElement.querySelector('.img-upload__effects');
const effectsPreviewElement = imgUploadEffectsElement.querySelectorAll('.effects__preview');

const FileTypes = ['jpg', 'jpeg', 'png'];

const appendPreviewPhoto = () => {
  const file = imgUploadInputElement.files[0];
  const url = URL.createObjectURL(file);
  const fileName = file.name.toLowerCase();
  const matches = FileTypes.some((it) => fileName.endsWith(it));

  if (matches) {
    imgPreviewElement.src = url;
    imgPreviewElement.alt = file.name;
    effectsPreviewElement.forEach((qwe) => {
      qwe.style.background = `url(${url}) center no-repeat`;
      qwe.style.backgroundSize = '100% auto';
    });
  }
};

export {appendPreviewPhoto};
