import {getRandomInteger, getRandomArrayElement,getRandomIdGenerator} from './util.js';
import { MIN_COMMENTS, MAX_COMMENTS, LENGTH_PHOTO} from './data.js';

const getRandomPhotoId = getRandomIdGenerator(1, 25);
const getRandomMessageId = getRandomIdGenerator(1, 300);

// создание вложенного объекта Comments
const createComment = () => {
  const id = getRandomMessageId();
  const avatarNumber = getRandomInteger(1, 6);
  const MESSAGES = [ 'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];
  const NAMES = [ 'Иван',
    'Себастьян',
    'Мария',
    'Кристоф',
    'Виктор',
    'Юлия',
    'Люпита',
    'Вашингтон',
    'Любомир',
    'Василий'];
  return {
    id: id,
    avatar: `img/avatar-${avatarNumber}.svg`,
    message: getRandomArrayElement(MESSAGES),
    name: getRandomArrayElement(NAMES)
  };
};


// количество комментариев
// const numComments = getRandomInteger(MIN_COMMENTS, MAX_COMMENTS);
// количество лайков
// const numLikes = getRandomInteger(MIN_LIKES, MAX_LIKES);
//количество описаний
// const numDesc = getRandomInteger(MIN_COMMENTS, LENGTH_PHOTO);
// const numDesc = getRandomInteger(1, 25);

// Функция создания объекта
const createPhoto = () => {
  const id = getRandomPhotoId();
  return {
    id: id,
    url: `photos/${id}.jpg`,
    description:`Это фотография  ${id}`,
    //  DESCRIPTIONS[numDesc()],
    // // `Это фотография №${id}`;
    likes: getRandomInteger(15,200),
    // Создаем список комментариев
    comments: Array.from({ length: getRandomInteger(MIN_COMMENTS, MAX_COMMENTS)}, createComment)
  };
};

const arePhotoArray = () => Array.from({length: LENGTH_PHOTO}, createPhoto);
// export {photoArray};
export {arePhotoArray};
