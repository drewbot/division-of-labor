import {scrollNav} from './scripts/scroll-nav.js';
import {showNav} from './scripts/show-nav.js';

(() => {

  const currentPath = window.location.pathname.replace(/^\/([^\/]*).*$/, '$1') || 'home';

  if (currentPath === 'home') {
    scrollNav();
    showNav();
  }

})();
