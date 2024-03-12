// <!-- импорты других модулей
// вызовы общих функций
// настрока скриптов -->
// import './data.js';
import {arePhotoArray} from './arePhotoArray.js';
import { renderPhotos } from './showMePhotos.js';
// arePhotoArray();
// renderPhotos();
const photos = arePhotoArray();
renderPhotos(photos);

// console.log(renderPhotos(photos));

