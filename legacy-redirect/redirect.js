(function () {
  var OLD_PREFIX = /^\/taskallwork\/?/;
  var NEW_ORIGIN = 'https://taskall.work';

  var PATH_MAP = {
    '': '',
    'index.html': '',
    'service.html': 'services/index.html',
    'inquiry.html': 'contact/index.html',
    'flow.html': 'flow/index.html',
    'sitemap.html': 'sitemap.xml',
    'search.html': 'services/index.html',
    'about.html': 'about/index.html'
  };

  var path = location.pathname.replace(OLD_PREFIX, '');
  var targetPath = PATH_MAP.hasOwnProperty(path) ? PATH_MAP[path] : path;
  var target = NEW_ORIGIN + '/' + targetPath + location.search + location.hash;

  location.replace(target);
})();
