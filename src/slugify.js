const {encodeURL} = require('hexo-util');

/**
 * @param {string} str The URL that should get sluggified
 */
exports.slugify = function (str) {
  return encodeURL(str)
    .replace(/%20/g, '-')
    .replace(/&/g, 'amp')
    .replace(/!/g, '')
    .replace(/:/g, '')
    .replace(/[/]/g, 'x2F')
    .replace(/ /g, '-');
};
