import {isEscapeKey} from './util.js';

const uploadFile = document.querySelector('.img-upload__input'); //Поле выбора файла для загрузки
const uploadOverlay = document.querySelector('.img-upload__overlay'); //загрузка наложения
const closeButtonElement = document.querySelector('.img-upload__cancel');
const body = document.body;//?

// Закрываем окно esc
const onFileEscKeydown = (evt) => {
  if (isEscapeKey(evt)
  && !evt.target.closest('.text__hashtags')
  && !evt.target.closest('.text__description')) {
    evt.preventDefault();
    closeButton();
  }
};

//открываем окно для загрузки фото
uploadFile.addEventListener('change', () => {
  uploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onFileEscKeydown);
});

//закрываем окно
function closeButton () {
  uploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onFileEscKeydown);

  //очищаем форму
  uploadFile.value = '';
  document.querySelector('.scale__control--value').value = `${100}%`;
  document.querySelector('.img-upload__preview').style.transform = '';
  document.querySelector('.effect-level__slider').noUiSlider.set(100);
  document.querySelector('.img-upload__preview').style.filter = 'none';
  document.querySelector('.img-upload__effect-level').classList.add('hidden');
}

closeButtonElement.addEventListener('click', closeButton);
