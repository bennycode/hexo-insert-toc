/* globals hexo: true */

const filter = require('./filter');

hexo.extend.filter.register('before_post_render', filter.insertToc);
