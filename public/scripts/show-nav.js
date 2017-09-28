export const showNav = function() {

  const $menuIcon = document.getElementById('menuIcon');
  const $navList = document.getElementById('navList');
  $menuIcon.addEventListener('click', (e) => {
    if ($navList.className === 'show') {
      $navList.classList.remove('show');
    } else {
      $navList.className += "show";
    }
  });
}
