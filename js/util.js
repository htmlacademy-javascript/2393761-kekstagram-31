// Функция получение случайного положительного целочисленного числа. Функция возвращает число из диапазона возможных индексов массива
function getRandomInteger (min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}
// const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];
// генератор  id
// const getRandomIdGenerator = (min, max) => {
//   const ids = [];
//   return function() {
//     let id = getRandomInteger(min, max);
//     while(ids.includes(id)) {
//       id = getRandomInteger(min, max);
//     }
//     ids.push(id);
//     return id;
//   };
// };

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];
// const createRandomArrayElement = (elements) => elements[createRandomIdFromRangeGenerator(0, elements.length - 1)];
//Проверка нажатой клавиши Escape
const isEscapeKey = (evt) => evt.key === 'Escape';

export {isEscapeKey, getRandomArrayElement};

