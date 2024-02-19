// Функция для проверки длины строки
// 1 вариант c помощью тернарного оператора
function stringСheckFirst(string, length) {
  return (string.length <= length) ? 'true' : 'false' ;
}
stringСheckFirst('проверяемая строка', 20);
stringСheckFirst('проверяемая строка', 18);
stringСheckFirst('проверяемая строка', 10);

// 2 вариант c помощью условной конструкции if
function stringСheckSecond(string, length) {
  if (string.length <= length) {
    return true;
  }
  return false;
}

// Примеры использования функции
stringСheckSecond('проверяемая строка', 20);
stringСheckSecond('проверяемая строка', 18);
stringСheckSecond('проверяемая строка', 10);

// Функция для проверки, является ли строка палиндромом:

// 1 вариант: перевернуть строку и сравнить перевернутую строку с неперевернутой строкой;

// a.привести строку к нижнему регистру метода toLowerCase();
// b.убрать все пробелы спомощью метода replaceALL();
// c.превращаем строку в массив с помощью метода split('') ;
// d.переворачиваем строку с помощью нативного метода для массива reverse();
// e.убираем разделители между элементами массива с помощью метода join('');
function palindromeReadFirst(string){
  string = string.toLowerCase().replace(/\s/g, '');
  return string === string.split('').reverse().join('');
}

palindromeReadFirst('топот');
palindromeReadFirst('ДовОд');
palindromeReadFirst('Кекс');
// // 2 вариант: решение задачи с помощью цикла;
// a.приводим строку к нижнему регистру методом toLowerCase();
// b.возвращаем новую строку при помощи метода replace() и  удаляем из строки все символы кроме букв;
// c.сравнивавем первый символ и последний символ, второй и предпоследний символ и т.д.;
// d.доходим до середины строки и сравниваем посимвольно равны ли наши части строки;
// e.если одна из пар неравна возвращаем false;
// f.если дошли до середины то цикл завершается и возвращаем true;

function palindromeReadSecond(string){
  string = string.toLowerCase().replace(/[^a-zа-яё]/g, '');
  for(let i = 0; i < string.length / 2; i++) {
    if(string[i] !== string[string.length - i - 1]) {
      return false;
    }
  }
  return true;
}


// Примеры использования функции
palindromeReadSecond('топот');
palindromeReadSecond('ДовОд');
palindromeReadSecond('Кекс');
