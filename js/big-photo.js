import {closeElement, showElement,isEscapeKey, addModalOpen, removeModalOpen} from './util.js';

const picturesContainerElement = document.querySelector('.pictures');
const bigPictureElement = document.querySelector('.big-picture');
const bigPictureCloseButtonElement = bigPictureElement.querySelector('.big-picture__cancel');
const bigPictureImgElement = bigPictureElement.querySelector('.big-picture__img img');
const socialCommentsElement = bigPictureElement.querySelector('.social__comments');
const socialCommentTemplateElement = socialCommentsElement.querySelector('.social__comment');
const likesCountElement = bigPictureElement.querySelector('.likes-count');
const socialCaptionElement = bigPictureElement.querySelector('.social__caption');
const commentLoaderElement = bigPictureElement.querySelector('.comments-loader');
const commentShownCountElement = bigPictureElement.querySelector('.social__comment-shown-count');
const commentTotalCountElement = bigPictureElement.querySelector('.social__comment-total-count');
const commentsLoaderElement = bigPictureElement.querySelector('.comments-loader');
const socialFooterTextElement = bigPictureElement.querySelector('.social__footer-text');


const COMMENT_STEP = 5;

let newPhotos = [];
let COMMENTS_COUNT = 0;
let globalComments = [];


const hideLoadMoreButton = () => {
  commentLoaderElement.classList.add('hidden');
};

const showLoadMoreButton = () => {
  commentLoaderElement.classList.remove('hidden');
};

const updateBigPictureInfo = (photo) => {
  bigPictureImgElement.src = photo.url;
  likesCountElement.textContent = photo.likes;
  socialCaptionElement.textContent = photo.description;
};

const addComments = (comments) => {
  const fragment = document.createDocumentFragment();
  const commentsToShow = comments.slice(COMMENTS_COUNT, COMMENTS_COUNT + COMMENT_STEP);

  commentsToShow.forEach((comment) => {
    const socialComment = socialCommentTemplateElement.cloneNode(true);

    socialComment.querySelector('.social__picture').src = comment.avatar;
    socialComment.querySelector('.social__picture').alt = comment.name;
    socialComment.querySelector('.social__text').textContent = comment.message;
    fragment.appendChild(socialComment);
  });

  socialCommentsElement.appendChild(fragment);
  COMMENTS_COUNT += commentsToShow.length;
  commentShownCountElement.textContent = COMMENTS_COUNT;

  if (COMMENTS_COUNT >= comments.length) {
    hideLoadMoreButton();
  } else {
    showLoadMoreButton();
  }
};

const onCommentsLoaderClick = () => {
  addComments(globalComments);
};

const openBigPicture = (pictureId) => {
  socialCommentsElement.innerText = '';

  COMMENTS_COUNT = 0;

  const currentPhoto = newPhotos.find((photo) => photo.id === Number(pictureId));
  updateBigPictureInfo(currentPhoto);
  globalComments = currentPhoto.comments;
  commentTotalCountElement.textContent = globalComments.length.toString();

  addComments(globalComments);
  showElement(bigPictureElement);
  addModalOpen();
  document.addEventListener('keydown', onEscKeyDown);
};

const onCloseButtonClick = (evt) => {

  if (evt) {
    evt.preventDefault();
  }

  socialFooterTextElement.value = '';
  closeElement(bigPictureElement);
  removeModalOpen();
  document.removeEventListener('keydown', onEscKeyDown);
};

function onEscKeyDown (evt) {
  if (isEscapeKey(evt)) {
    onCloseButtonClick();
  }
}

const onPicturesContainerClick = (evt) => {
  const currentThumbnailPicture = evt.target.closest('.picture');

  if (currentThumbnailPicture){
    openBigPicture(currentThumbnailPicture.dataset.pictureId);
  }
};

const initEventListeners = () => {
  picturesContainerElement.addEventListener('click', onPicturesContainerClick);
  bigPictureCloseButtonElement.addEventListener('click', onCloseButtonClick);
  commentsLoaderElement.addEventListener('click', onCommentsLoaderClick);
};

const initializeGallery = (photos) => {
  newPhotos = photos;
  initEventListeners();
};

export {initializeGallery};
