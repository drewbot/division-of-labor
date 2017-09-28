import {scrollAnimate} from './scroll-animate.js';

export const scrollNav = function() {

  let $navLinks = document.getElementsByClassName('nav-link');

  [].forEach.call($navLinks, ($elem) => {
    $elem.addEventListener('click', (e) => {
      let $anchor = e.currentTarget.querySelector('a');
      let anchorHref = $anchor.getAttribute('href');
      let toSectionId = anchorHref.slice(1, anchorHref.length);
      let $toSection = document.getElementById(toSectionId);
      e.preventDefault();
      console.log($toSection);
      scrollAnimate($toSection.offsetTop, 500);
    });
  });
}
