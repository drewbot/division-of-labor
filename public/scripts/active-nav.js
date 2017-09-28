export const activeNav = function() {
  const currentPath = window.location.pathname.replace(/^\/([^\/]*).*$/, '$1') || 'home';
  console.log(currentPath);

  let $navLinks = document.getElementsByClassName('nav-link');
  let $activeLink = document.getElementById(`${currentPath}NavLink`);

  [].forEach.call($navLinks, ($elem) => {
    $elem.classList.remove('active');
    $elem.addEventListener('click', (e) => {
      [].forEach.call($navLinks, ($elem) => {
        $elem.classList.remove('active');
      });
      e.currentTarget.className += ' active';
    });
  });

  $activeLink.className += ' active';
}

// <nav>
//   <ul>
//     <li class="nav-link" id="homeNavLink"><a href="/">Home</a></li>
//     <li class="nav-link" id="trainingNavLink"><a href="/training">Training</a></li>
//     <li class="nav-link" id="recruitingNavLink"><a href="/recruiting">Recruiting</a></li>
//     <li class="nav-link" id="softwareNavLink"><a href="/software">Software</a></li>
//   </ul>
// </nav>
