(() => {
  const currentPath = window.location.pathname.replace(/^\/([^\/]*).*$/, '$1') || 'home';
  console.log(currentPath);

  let $navLinks = document.getElementsByClassName('nav-link');
  let $activeLink = document.getElementById(currentPath + 'NavLink');

  [].forEach.call($navLinks, function($elem) {
    $elem.classList.remove('active');
    $elem.addEventListener('click', (e) => {
      [].forEach.call($navLinks, function($elem) {
        $elem.classList.remove('active');
      });
      e.currentTarget.className += ' active'
    });
  });

  $activeLink.className += ' active';

})();
