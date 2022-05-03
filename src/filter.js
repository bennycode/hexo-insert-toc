const toc = require('markdown-toc');
const {encodeURL} = require('hexo-util');

exports.insertToc = function (data) {
  const slugify = str => {
    return encodeURL(str).replace(/%20/g, '-');
  };
  data.content = toc.insert(data.content, {slugify});
  return data;
};
