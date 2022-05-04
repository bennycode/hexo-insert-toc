const toc = require('markdown-toc');
const {slugify} = require('./slugify');

exports.insertToc = function (data) {
  data.content = toc.insert(data.content, {...this.config['hexo-insert-toc'], slugify});
  return data;
};
