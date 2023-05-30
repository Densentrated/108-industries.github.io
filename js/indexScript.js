// header and subheadr movement
anime({
    targets: ".header",
    translateX: ["-40%", "4%"],
    durration: 20000,
    easeing: "easeInOutSine",
    delay: anime.stagger(140)
})

anime({
    targets: "#subHead1",
    translateX:"14%",
    duration: 1000
})

anime({
    targets: "#subHead2",
    translateX:"24%",
    durration: 1000
})

