const toc = require('markdown-toc');
const {slugify} = require('./slugify');

/**
 * @param {{content: string}} data The data to be rendered
 * @this {hexo} The global Hexo object
 */
exports.insertToc = function (data) {
  data.content = toc.insert(data.content, {...this.config['hexo-insert-toc'], slugify});
  return data;
};
