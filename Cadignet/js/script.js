document.addEventListener("DOMContentLoaded", function(event) {
    let menuMobil = document.querySelector('.navbar__toggler');
    menuMobil.setAttribute('aria-expanded', 'false');

    menuMobil.addEventListener('click', function() {
        if (menuMobil.getAttribute('aria-expanded') == 'false') {
            menuMobil.setAttribute('aria-expanded', 'true');
        } else {
            menuMobil.setAttribute('aria-expanded', 'false');
        }
    });
});