/* globals hexo: true */

const filter = require('./filter');

const config = hexo.config['hexo-insert-toc'] || {};
hexo.config['hexo-insert-toc'] = Object.freeze(config);

hexo.extend.filter.register('before_post_render', filter.insertToc);
