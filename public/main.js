(() => {
  const currentPath = window.location.pathname.replace(/^\/([^\/]*).*$/, '$1');
  console.log(currentPath || 'home');

  let $navLinks = document.getElementsByClassName('nav-link');
  let $activeLink = document.getElementById(currentPath + 'NavLink');

  [].forEach.call($navLinks, function($elem) {
    $elem.classList.remove('active');
  });

  $activeLink.className += ' active';

})();
