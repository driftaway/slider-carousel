var glide = new Glide(".glide", {
  type: "carousel",
  focusAt: "center",
  perView: 7,
  startAt: 1,
  gap: 30,
  perTouch: false,
  animationDuration: 150,
  dragThreshold: 10,
  swipeThreshold: 10,
  touchRatio: 1,
  touchAngle: 90
});

glide.mount();