// Mark the current page in the nav
(function () {
  var page = (location.pathname.split('/').pop() || 'index.html').replace('.html', '');
  var map = { index: '', features: 'features', download: 'download', docs: 'docs', donate: 'donate' };
  var key = map[page];
  if (!key) return;
  document.querySelectorAll('.links a[data-nav]').forEach(function (a) {
    if (a.dataset.nav === key) a.setAttribute('aria-current', 'page');
  });
})();
