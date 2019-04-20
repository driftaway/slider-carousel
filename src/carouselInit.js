let glide = new Glide('.glide', {
    type: 'carousel',
    focusAt: 'center',
    perView: 7,
    startAt: 1,
    gap: 0,
    perTouch: false,
    animationDuration: 50,
    dragThreshold: 10,
    swipeThreshold: 10,
    touchRatio: 1,
    touchAngle: 90,
    keyboard: false
})

let glideMobile = new Glide('.glide', {
    type: 'carousel',
    focusAt: 'center',
    perView: 3,
    startAt: 1,
    gap: 10,
    perTouch: false,
    animationDuration: 50,
    dragThreshold: 10,
    swipeThreshold: 10,
    touchRatio: 1,
    touchAngle: 90,
    keyboard: false
})

let isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
if (isMobile == true || window.innerWidth <= 900) {
    glideMobile.mount()
} else glide.mount()