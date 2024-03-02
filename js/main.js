//Описание объекта - описание фото
//  {
//   id -число — идентификатор опубликованной фотографии. Это число от 1 до 25. Идентификаторы не должны повторяться.
//   url - строка — адрес картинки вида photos/{{i}}.jpg, где {{i}} — это число от 1 до 25. Адреса картинок не должны повторяться.
//   description - cтрока — описание фотографии. Описание придумайте самостоятельно.
//   likes - число — количество лайков, поставленных фотографии. Случайное число от 15 до 200.
//   comments : [] - Массив объектов — список комментариев, оставленных другими пользователями к этой фотографии.
//Количество комментариев к каждой фотографии — случайное число от 0 до 30.


// набор имен (10)
const NAMES = [
  'Иван',
  'Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
  'Любомир',
  'Василий'];

const DESCRIPTIONS = [
  'Это крупномасштабная аллегорическая картина изображает выбор Геркулеса между добродетелью и пороком, олицетворённые на этом полотне фигурами двух женщин, физически тянущих его в разные стороны',
  'Картина посвящена событиям русификации Финляндии и аллегорически изображает нападение двуглавого орла на финскую девушку. Находится в коллекции Национального музея Финляндии в Хельсинки',
  'На картине изображён Амур с тёмными крыльями, полусидящий или слезающий с некоего возвышения. Вокруг лежат разбросанные им предметы, так или иначе связанные с человеческой деятельностью',
  'Картина иллюстрирует христианское поверье о том, что архангел Гавриил приходит к умершим и забирает их души',
  'Картина была написана Дали в 1965 году, явившаяся своеобразным ответом на знаменитую насмешливую прозвище–анаграмму 1939 года «Avida Dollars» (что по-латыни не совсем точно, но узнаваемо значит «алчный до долларов»), составленную из имени «Salvador Dalí» основоположником сюрреализма Андре Бретоном',
  'На полотне изображено сражение между македонской армией Александра Великого и персидским войском царя Дария',
  'Картина в аллегорическом виде описывает морскую битву при Лепанто (1571), в которой флот Священной лиги одержал победу над флотом Османской империи',
];

// набор сообщений (8)
const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];

const MIN_LIKES = 15;
const MAX_LIKES = 200;
const MIN_COMMENTS = 0;
const MAX_COMMENTS = 30;
const LENGTH_PHOTO = 25;
// Функция получение случайного положительного целочисленного числа. Функция возвращает число из диапазона возможных индексов массива
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  let previousResult = -1;
  return () => {
    const result = Math.floor(Math.random() * (upper - lower + 1) + lower);
    // Исключения повторения значения предыдущего вызова (для комментариев)
    if (previousResult !== result){
      previousResult = result;
      return result;
    }
    // Просто берем следующий в наборе сообщений
    return result === upper ? lower : result + 1;
  };
};
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];
// создание вложенного объекта Comments
const createComment = () => {
  let id = 1;
  const indexMessageArr = getRandomInteger(0, MESSAGES.length - 1);
  const indexNameArr = getRandomInteger(0, NAMES.length - 1);
  // const indexDescriptionArr = getRandomInteger(0, DESCRIPTIONS.length - 1);
  return () =>{
    const comment = {};
    const idAvatar = getRandomInteger(1, 6);
    comment.id = id;
    comment.avatar = `img/avatar-${idAvatar()}.svg`;
    comment.message = `${MESSAGES[indexMessageArr()]}. ${MESSAGES[indexMessageArr()]}`;
    comment.name = `${NAMES[indexNameArr()]}`;
    // comment.description = `${DESCRIPTIONS[indexDescriptionArr()]}. ${DESCRIPTIONS[indexDescriptionArr()]}`;
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
    photo.description = getRandomArrayElement(DESCRIPTIONS);
    photo.likes = numLikes();
    // Создаем список комментариев
    photo.comments = Array.from({ length: numComments() }, createComment());
    id++;
    return photo;
  };
};

// Создадим массив описаний фото
const photoArray = Array.from({length: LENGTH_PHOTO}, createPhoto());
console.log(photoArray);
// Выведем результат в консоль
// console.log(photoArray);
// console.table(photoArray[0].comments);
