import { isEscapeKey } from './util';
import { photos } from './showMePhotos';
import { clearComments,renderComments } from './renderComments';

const body = document.querySelector('body');
const pictureContainer = document.querySelector('.pictures');
const bigPictureNode = document.querySelector('.big-picture');
const bigPictureImgNode = bigPictureNode.querySelector('.big-picture__img') .querySelector('img');
const likesCountNode = bigPictureNode.querySelector('.likes-count');
// const socialCommentsNode = bigPictureNode.querySelector('.social__comments');
// const socialCommentTemplate = socialCommentsNode.querySelector('.social__comment');
const commentsCaptionNode = bigPictureNode.querySelector('.social__caption');
// const commentsCountNode = bigPictureNode.querySelector('.social__comment-count');
// const commentsLoaderNode = bigPictureNode.querySelector('.social__comments-loader');
const bigPictureCancelNode = bigPictureNode.querySelector('.big-picture__cancel');


const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPicture();
  }
};

const closeBigPictureClick = () => {
  closeBigPicture();
};


const openBigPicture = (pictureId) => {
  const currentPhoto = photos.find((photo) => photo.id === Number(pictureId));
  // const socialCommentsFragment = document.createDocumentFragment();

  bigPictureImgNode.src = currentPhoto.url;
  likesCountNode.textContent = currentPhoto.likes;
  commentsCaptionNode.textContent = currentPhoto.description;

  // socialCommentsNode.innerHTML = '';

  // currentPhoto.comments.forEach((comment) => {
  //   const socialCommentsAll = socialCommentTemplate.cloneNode(true);

  //   socialCommentsAll.querySelector('.social__picture').src = comment.avatar;
  //   socialCommentsAll.querySelector('.social__picture').alt = comment.name;
  //   socialCommentsAll.querySelector('.social__text').textContent = comment.message;

  //   socialCommentsFragment.appendChild(socialCommentsAll);
  // });

  // socialCommentsNode.appendChild(socialCommentsFragment);

  // commentsCountNode.classList.add('hidden');
  // commentsLoaderNode.classList.add('hidden');


  renderComments(currentPhoto.comments);


  bigPictureNode.classList.remove('hidden');
  bigPictureCancelNode.addEventListener('click', closeBigPictureClick);
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
};

const openModalBigPicture = () => {
  pictureContainer.addEventListener('click', (evt) => {
    const currentPicture = evt.target.closest('.picture');
    if (currentPicture) {
      evt.preventDefault();
      openBigPicture(currentPicture.dataset.pictureId);
    }
  });
};

function closeBigPicture () {

  clearComments();

  document.body.classList.remove('modal-open');
  bigPictureNode.classList.add('hidden');
  bigPictureCancelNode.removeEventListener('click', closeBigPictureClick);
  document.removeEventListener('keydown', onDocumentKeydown);
}

export {openModalBigPicture};
