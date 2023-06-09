// header and subheadr movement
anime({
    targets: ".subHeader",
    translateX: ["-40%", "4%"],
    duration: 1500,
    easeing: "easeInOutSine",
    delay: anime.stagger(160)
})

// navbar movement
anime({
    targets: ".navBar",
    translateX: ["-10vw", "70vw"],
    duration: 600,
    easing: 'easeInOutSine'
})

//smooth scroll on nav bar click
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});