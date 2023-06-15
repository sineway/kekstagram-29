const descriptions = [
  'Описание 1',
  'Описание 2',
  'Описание 3',
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
  // TODO: createPictureCommentArray
  const comments = [];

  return {id, url, description, likes, comments};
}

/**
 * @template T
 * @param {Array<T>} items
 * @returns {T}
 */
function pickItemFromArray(items) {
  const index = Math.floor(Math.random() * items.length);

  return items[index];
}

/**
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
function pickIntegerInRange(min, max) {
  const value = min + Math.random() * (max - min);

  return Math.round(value);
}

createPictureArray();
