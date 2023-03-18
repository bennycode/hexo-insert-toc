const filter = require('./filter');

const config = hexo.config['hexo-insert-toc'] || {};
hexo.config['hexo-insert-toc'] = config;

hexo.extend.filter.register('before_post_render', filter.insertToc);
