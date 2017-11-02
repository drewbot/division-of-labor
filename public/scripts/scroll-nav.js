import { scrollAnimate } from './scroll-animate.js';

export const scrollNav = function() {

    let $navLinks = document.querySelector('nav').getElementsByTagName('li');

    [].forEach.call($navLinks, ($elem) => {
        $elem.addEventListener('click', (e) => {
            let anchorHref = e.currentTarget.querySelector('a').getAttribute('href');
            let toSectionId = anchorHref.slice(1, anchorHref.length);
            let $toSection = document.getElementById(toSectionId);
            e.preventDefault();
            scrollAnimate($toSection.offsetTop, 500);
        });
    });
}

// Version of markup that goes with scroll nav component
// <nav>
//   <ul id="navList">
//     <li><a href="#about">About</a></li>
//     <li><a href="#services">Services</a></li>
//     <li><a href="#team">Team</a></li>
//     <li><a href="#clients">Clients</a></li>
//     <li><a href="#contact">Contact</a></li>
//   </ul>
// <nav>