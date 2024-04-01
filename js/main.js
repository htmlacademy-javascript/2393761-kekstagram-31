
import './util.js';
import './renderPhoto.js';
import './renderComments.js';
import './form.js';
import './validateForm.js';
import './scaleButtons.js';
import './imgEffects.js';

import {getData} from './api.js';
import {createPosts} from './renderComments.js';
import {closeButton} from './form.js';
import {setUserFormSubmit} from './validateForm.js';

getData()
  .then((posts) => {
    createPosts(posts);
  });


setUserFormSubmit(closeButton);
