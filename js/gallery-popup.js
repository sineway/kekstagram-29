import {showPopup} from './popup.js';

const popup = document.querySelector('.big-picture');
const commentTemplate = popup.querySelector('.social__comment');

/**
 * @param {Picture} data
 */
function renderPopup(data) {
  popup.querySelector('.big-picture__img img').setAttribute('src', data.url);
  popup.querySelector('.social__caption').textContent = data.description;
  popup.querySelector('.likes-count').textContent = String(data.likes);
  popup.querySelector('.social__comments').replaceChildren(...data.comments.map(createComment));

  showPopup(popup);
}

/**
 * @param {PictureComment} data
 * @returns {HTMLLIElement}
 */
function createComment(data) {
  const comment = /** @type {HTMLLIElement} */ (commentTemplate.cloneNode(true));

  comment.querySelector('.social__picture').setAttribute('src', data.avatar);
  comment.querySelector('.social__picture').setAttribute('alt', data.name);
  comment.querySelector('.social__text').textContent = data.message;

  return comment;
}

export default renderPopup;
