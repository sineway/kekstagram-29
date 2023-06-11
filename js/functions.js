
/**
 * Проверит подходит ли `value` по длине.
 * @param {string} value
 * @param {number} length
 * @returns {boolean}
 */
function fitsLength(value, length) {
  return value.length <= length;
}

fitsLength('проверяемая строка', 10);

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

isPalindrome('Лёша на полке клопа нашёл ');

/**
 * Извлечёт из `value` цифры.
 * @param {string | number} value
 * @returns {number}
 */
function parseDigits(value) {
  const digits = String(value).replace(/[^0-9]+/g, '');

  return digits ? Number(digits) : NaN;
}

parseDigits('а я томат');
