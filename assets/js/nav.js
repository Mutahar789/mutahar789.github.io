(function () {
  var nav = document.querySelector('.topnav');
  if (!nav) { return; }

  var links = [].slice.call(nav.querySelectorAll('.topnav-links a'));
  var sections = links.map(function (link) {
    var href = link.getAttribute('href') || '';
    return href.charAt(0) === '#' ? document.getElementById(href.slice(1)) : null;
  });

  function update() {
    var offset = nav.offsetHeight + 28;
    var current = 0;

    for (var i = 0; i < sections.length; i++) {
      if (sections[i] && sections[i].getBoundingClientRect().top <= offset) {
        current = i;
      }
    }

    var atBottom = window.innerHeight + window.pageYOffset >=
      document.documentElement.scrollHeight - 2;
    if (atBottom) { current = links.length - 1; }

    for (var j = 0; j < links.length; j++) {
      if (j === current) {
        links[j].classList.add('active');
      } else {
        links[j].classList.remove('active');
      }
    }
  }

  /* mobile drop-down menu */
  var toggle = nav.querySelector('.topnav-toggle');

  function setMenu(open) {
    if (open) {
      nav.classList.add('open');
    } else {
      nav.classList.remove('open');
    }
    if (toggle) {
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    }
  }

  if (toggle) {
    toggle.addEventListener('click', function () {
      setMenu(!nav.classList.contains('open'));
    });
  }

  for (var k = 0; k < links.length; k++) {
    links[k].addEventListener('click', function () {
      setMenu(false);
    });
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { setMenu(false); }
  });

  document.addEventListener('click', function (e) {
    if (nav.classList.contains('open') && !nav.contains(e.target)) {
      setMenu(false);
    }
  });

  if (links.length < 2) { return; }

  var ticking = false;
  function onScroll() {
    if (ticking) { return; }
    ticking = true;
    window.requestAnimationFrame(function () {
      update();
      ticking = false;
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  update();
})();
