const {encodeURL} = require('hexo-util');

exports.slugify = function (str) {
  return encodeURL(str)
    .replace(/%20/g, '-')
    .replace(/&/g, 'amp')
    .replace(/!/g, '')
    .replace(/:/g, '')
    .replace(/ /g, '-');
};
