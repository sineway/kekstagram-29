import {pickItemFromArray, pickIntegerInRange} from './utils.js';

const descriptions = [
  'Описание 1',
  'Описание 2',
  'Описание 3',
];

const messages = [
  'Комментарий 1',
  'Комментарий 2',
  'Комментарий 3',
];

const names = [
  'Имя 1',
  'Имя 2',
  'Имя 3',
];

/**
 * @param {number} length
 * @returns {Array<Picture>}
 */
function createPictureArray(length = 25) {
  const items = new Array(length).fill(1);

  return items.map((start, index) => createPicture(start + index));
}

/**
 * @param {number} id
 * @returns {Picture}
 */
function createPicture(id) {
  const url = `photos/${id}.jpg`;
  const description = pickItemFromArray(descriptions);
  const likes = pickIntegerInRange(15, 200);
  const comments = createPictureCommentArray(pickIntegerInRange(0, 30));

  return {id, url, description, likes, comments};
}

/**
 * @param {number} length
 * @returns {Array<PictureComment>}
 */
function createPictureCommentArray(length) {
  const items = new Array(length).fill(1);

  return items.map((start, index) => createPictureComment(start + index));
}

/**
 * @param {number} id
 * @returns {PictureComment}
 */
function createPictureComment(id) {
  const avatar = `img/avatar-${pickIntegerInRange(1, 6)}.svg`;
  const message = pickItemFromArray(messages);
  const name = pickItemFromArray(names);

  return {id, avatar, message, name};
}

export default createPictureArray;
