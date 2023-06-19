/**
 * Выберет случайный элемент из списка `items`.
 * @template T
 * @param {Array<T>} items
 * @returns {T}
 */
function pickItemFromArray(items) {
  const index = Math.floor(Math.random() * items.length);

  return items[index];
}

/**
 * Выберет случайное число в диапазоне `min` - `max`.
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
function pickIntegerInRange(min, max) {
  const value = min + Math.random() * (max - min);

  return Math.round(value);
}

/**
 * Проверит подходит ли `value` по длине.
 * @param {string} value
 * @param {number} length
 * @returns {boolean}
 */
function fitsLength(value, length) {
  return value.length <= length;
}

/**
 * Проверит является ли `value` палиндромом.
 * @param {string | number} value
 * @returns {boolean}
 */
function isPalindrome(value) {
  const normalized = String(value).replaceAll(' ', '').toLowerCase();
  const reversed = normalized.split('').reverse().join('');

  return normalized === reversed;
}

/**
 * Извлечёт из `value` цифры.
 * @param {string | number} value
 * @returns {number}
 */
function parseDigits(value) {
  const digits = String(value).replace(/[^0-9]+/g, '');

  return digits ? Number(digits) : NaN;
}

export {
  pickItemFromArray,
  pickIntegerInRange,
  fitsLength,
  isPalindrome,
  parseDigits,
};
