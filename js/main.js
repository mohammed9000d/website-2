// Sticky menu background
window.addEventListener('scroll', function() {
    if (window.scrollY > 150) {
        document.querySelector('#navbar').style.opacity = 0.9;
        document.querySelector('#navbar').style.background = '#015fa9';
    } else {
        document.querySelector('#navbar').style.opacity = 1;
        document.querySelector('#navbar').style.background = 'none';
    }
});