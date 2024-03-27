import {getRandomInteger, getRandomArrayElement,getRandomIdGenerator} from './util.js';
import { NAME, MESSAGE,DESCRIPTION,MIN_LIKES,MAX_LIKES,MIN_COMMENTS, MAX_COMMENTS, LENGTH_PHOTO} from './data.js';


const getRandomPhotoId = getRandomIdGenerator(1, 25);
const getRandomMessageId = getRandomIdGenerator(1, 500);

// создание вложенного объекта Comments
const createComment = () => {
  const id = getRandomMessageId();
  const avatarNumber = getRandomInteger(1, 6);
  const MESSAGES = MESSAGE;
  const NAMES = NAME;
  return {
    id: id,
    avatar: `img/avatar-${avatarNumber}.svg`,
    message: getRandomArrayElement(MESSAGES),
    name: getRandomArrayElement(NAMES)
  };
};

// Функция создания объекта
const createPhoto = () => {
  const id = getRandomPhotoId();
  return {
    id: id,
    url: `photos/${id}.jpg`,
    description: getRandomArrayElement(DESCRIPTION),
    // description:`Это фотография  ${id}`,
    likes: getRandomInteger(MIN_LIKES,MAX_LIKES),
    // Создаем список комментариев
    comments: Array.from({ length: getRandomInteger(MIN_COMMENTS, MAX_COMMENTS)}, createComment)
  };
};

const arePhotoArray = () => Array.from({length: LENGTH_PHOTO}, createPhoto);
export {arePhotoArray};
