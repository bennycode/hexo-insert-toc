const {slugize} = require('hexo-util');

exports.slugify = function (str) {
  return slugize(str);
};
