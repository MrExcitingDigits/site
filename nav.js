// Nav style after scroll
const nav = document.getElementById('nav')
window.checkNavBgScroll = function() {(window.scrollY > nav.offsetHeight) ? nav.classList.add('scrolled') : nav.classList.remove('scrolled')}
window.addEventListener('scroll', checkNavBgScroll)