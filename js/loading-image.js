import { initUploadModal } from './image-upload-form';
import { showErrorMessage } from './messages';

const fileChooser = document.querySelector('.img-upload__start input[type=file]');
const uploadForm = document.querySelector('.img-upload__form');
const imgUploadPreview = uploadForm.querySelector('.img-upload__preview img');
const effectsPreview = document.querySelectorAll('.effects__preview');

const FILE_TYPES = ['.jpg', '.jpeg', '.png', '.gif', '.jfif'];

const loadingImage = () => {
  fileChooser.addEventListener('change', () => {
    const file = fileChooser.files[0];
    const fileName = file.name.toLowerCase();
    const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

    if (matches) {
      const url = URL.createObjectURL(file);
      imgUploadPreview.src = url;
      effectsPreview.forEach((item) => {
        item.style.backgroundImage = `url(${url})`;
      });
    } else {
      showErrorMessage('Неверный тип файла');
      return;
    }
    initUploadModal();
  });
};

export {loadingImage};
