// <!-- импорты других модулей
// вызовы общих функций
// настрока скриптов -->
// import './data.js';
import {arePhotoArray} from './arePhotoArray.js';
arePhotoArray();
// console.log(arePhotoArray());
import { renderPhotos } from './showMePhotos.js';
const photos = arePhotoArray();
// console.log(renderPhotos(photos));
renderPhotos(photos);
