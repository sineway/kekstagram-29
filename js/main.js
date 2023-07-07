import {request} from './utils.js';
import initGallery from './gallery.js';
import './upload.js';

/**
 * @type {Array<Picture>}
 */
const data = await request('https://28.javascript.pages.academy/kekstagram/data');

initGallery(data);
