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
export {getRandomArrayElement};
export {getRandomInteger};

