import {getRandomInteger} from './util.js';
import {NAMES,DESCRIPTIONS,MESSAGES,MIN_LIKES,MAX_LIKES,MIN_COMMENTS,MAX_COMMENTS,LENGTH_PHOTO} from './data.js';
import {getRandomArrayElement} from './util.js';

// создание вложенного объекта Comments
const createComment = () => {
  let id = 1;
  const indexMessageArr = getRandomInteger(0, MESSAGES.length - 1);
  const indexNameArr = getRandomInteger(0, NAMES.length - 1);
  const indexDescriptionArr = getRandomInteger(0, DESCRIPTIONS.length - 1);
  return () =>{
    const comment = {};
    const idAvatar = getRandomInteger(1, 6);
    comment.id = id;
    comment.avatar = `img/avatar-${idAvatar()}.svg`;
    comment.message = `${MESSAGES[indexMessageArr()]}. ${MESSAGES[indexMessageArr()]}`;
    comment.name = `${NAMES[indexNameArr()]}`;
    comment.description = `${DESCRIPTIONS[indexDescriptionArr()]}. ${DESCRIPTIONS[indexDescriptionArr()]}`;
    id++;
    return comment;
  };
};


// количество комментариев
const numComments = getRandomInteger(MIN_COMMENTS, MAX_COMMENTS);
// количество лайков
const numLikes = getRandomInteger(MIN_LIKES, MAX_LIKES);

// Функция создания объекта
const createPhoto = () => {
  let id = 1;
  return () => {
    const photo = {};
    photo.id = id;
    photo.url = `photos/${id}.jpg`;
    photo.description = getRandomArrayElement();
    // `Это фотография №${id}`;
    photo.likes = numLikes();
    // Создаем список комментариев
    photo.comments = Array.from({ length: numComments() }, createComment());
    id++;
    return photo;
  };
};

// Создадим массив описаний фото
// const photoArray = Array.from({length: LENGTH_PHOTO}, createPhoto());
// console.log(photoArray);
const isPhotoArray = () => Array.from({length: LENGTH_PHOTO}, createPhoto());
// export {photoArray};
export {isPhotoArray};
