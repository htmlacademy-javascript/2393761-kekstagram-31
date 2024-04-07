import {closeElement, showElement,isEscapeKey, addModalOpen, removeModalOpen} from './util.js';
import {picturesContainerElement, bigPictureCloseButtonElement, bigPictureImgElement, socialCommentTemplateElement,
  likesCountElement, socialCaptionElement, commentLoaderElement, commentShownCountElement,
  commentTotalCountElement, commentsLoaderElement, socialCommentsElement, bigPictureElement, socialFooterTextElement} from './project-wide-search-elements.js';

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
