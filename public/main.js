import { showNav } from './scripts/show-nav.js';
import { activeNav } from './scripts/active-nav.js';

(() => {

    const owner = 'Division of Labor';
    const githubUrl = '';
    const currentYear = new Date().getFullYear();
    const $copyrightInfo = document.getElementById('copyrightInfo');

    function isTouchDevice() {
        return !!('ontouchstart' in window) || !!('msmaxtouchpoints' in window.navigator);
    }

    function getCopyright() {
        return `&copy; ${currentYear} ${owner}. All Rights Reserved.`;
    }

    function getOwnerContent() {
        return `Made by <a href="${githubUrl}">${owner}</a>`
    }

    $copyrightInfo.innerHTML = getCopyright();

    showNav();
    activeNav();

})();