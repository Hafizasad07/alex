document.addEventListener('DOMContentLoaded', function () {
    // Get the current page's filename
    const currentPage = window.location.pathname.split("/").pop();

    // Select all navigation links
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(function (link) {
        // Get the href attribute of the link
        const linkPage = link.getAttribute('href');

        // Compare with the current page
        if (linkPage === currentPage) {
            link.classList.add('active');
        }

        // Optional: Handle cases where href might include query parameters or hash
        // You can enhance the comparison logic as needed
    });
});

jQuery(".carousel0").owlCarousel({
    autoplay: true,
    rewind: false,
    loop: true,
    /* use rewind if you don't want loop */
    margin: 0, 
    /*
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    */
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 3000,
    smartSpeed: 3000,
    nav: false,
    dots: false,
    items: 1,
  });