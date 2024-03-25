const COMMENTS_SHOW_STEP = 5;
// const currentCount = 0;
// const comments = [];

const bigPictureNode = document.querySelector('.big-picture');
const socialCommentsNode = bigPictureNode.querySelector('.social__comments'); //<ul class="social__comments">
const socialCommentTemplate = socialCommentsNode.querySelector('.social__comment');//<li class="social__comment">
const socialCommentShowCount = bigPictureNode.querySelector('.social__comment-shown-count'); //<span class="social__comment-shown-count">5</span>
const socialCommentTotalCount = bigPictureNode.querySelector('.social__comment-total-count'); //<span class="social__comment-total-count">125</span>
const commentsLoader = bigPictureNode.querySelector('.comments-loader'); //<button type="button" class="social__comments-loader  comments-loader">Загрузить еще

const clearComments = () => {
  socialCommentsNode.innerHTML = '';
};
clearComments();


// socialCommentsNode.innerHTML = '';

const renderComments = (comments, i = 0, callback) => {
  const commentsLength = comments.length;
  const visibleCommentsCount = COMMENTS_SHOW_STEP + (COMMENTS_SHOW_STEP * i);
  const eliminatedComments = comments.slice(0, visibleCommentsCount);

  commentsLoader.removeEventListener('click', callback);

  // socialCommentsNode.innerHTML = '';

  clearComments();

  for (const element of eliminatedComments) {
    const comment = socialCommentTemplate.cloneNode(true);
    comment.querySelector('.social__picture').src = element.avatar;
    comment.querySelector('.social__picture').alt = element.name;
    comment.querySelector('.social__text').textContent = element.message;

    socialCommentShowCount.textContent = eliminatedComments.length;

    socialCommentsNode.append(comment);
  }

  socialCommentTotalCount.textContent = commentsLength;

  if (commentsLength < COMMENTS_SHOW_STEP || commentsLength <= visibleCommentsCount) {
    commentsLoader.classList.add('hidden');
  } else {
    commentsLoader.classList.remove('hidden');
  }

  const clickHandler = () => {
    renderComments(comments, i + 1, clickHandler);
  };

  commentsLoader.addEventListener('click', clickHandler);

};

clearComments();
// const clearComments = () => {
//   socialCommentTemplate.forEach((element) => element.remove());

// };


export {clearComments, renderComments};
