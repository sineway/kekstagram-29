import renderPopup from './upload-popup.js';
import './pristine-validators.js';
import {request} from './utils.js';

/**
 * @type {HTMLFormElement}
 */
const form = document.querySelector('.img-upload__form');

// @ts-ignore
const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
});

form.addEventListener('change', onFormChange);
form.addEventListener('hide', onFormHide, true);
form.addEventListener('reset', onFormReset);
form.addEventListener('submit', onFormSubmit);

/**
 * @param {Event & {target: HTMLInputElement}} event
 */
function onFormChange(event) {
  if (event.target.matches('#upload-file')) {
    const [data] = event.target.files;

    renderPopup(data);
  }
}

function onFormHide() {
  form.reset();
}

function onFormReset() {
  pristine.reset();
}

/**
 * @param {SubmitEvent} event
 */
async function onFormSubmit(event) {
  event.preventDefault();

  if (!pristine.validate()) {
    return;
  }

  setSubmitBlocking(true);
  await sendFormData();
  resetFormAndHidePopup();
  setSubmitBlocking(false);
}

async function sendFormData() {
  const url = form.getAttribute('action');
  const method = form.getAttribute('method');
  const body = new FormData(form);

  await request(url, {method, body});
}

/**
 * @param {boolean} flag
 */
function setSubmitBlocking(flag) {
  form['upload-submit'].toggleAttribute('disabled', flag);
}

function resetFormAndHidePopup() {
  form['upload-cancel'].click();
}
