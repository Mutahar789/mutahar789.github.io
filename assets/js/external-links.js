/* Links that leave the page - other sites and files such as PDFs - open in a
   new tab. In-site navigation and same-page anchors are left alone. */
(function () {
  var FILE = /\.(pdf|docx?|pptx?|xlsx?|zip|csv)(\?|#|$)/i;
  var links = document.querySelectorAll('a[href]');

  for (var i = 0; i < links.length; i++) {
    var link = links[i];
    var href = link.getAttribute('href') || '';

    if (href === '' || href.charAt(0) === '#' || /^(mailto|tel):/i.test(href)) {
      continue;
    }

    var external = link.hostname && link.hostname !== window.location.hostname;
    var file = FILE.test(link.pathname || href);

    if (external || file) {
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
    }
  }
})();
