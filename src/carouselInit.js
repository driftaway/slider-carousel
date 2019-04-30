let glide = new Glide('.glide', {
    type: 'carousel',
    focusAt: 'center',
    perView: 7,
    startAt: 1,
    gap: 0,
    perTouch: false,
    animationDuration: 50,
    dragThreshold: 50,
    swipeThreshold: 50,
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
    perTouch: 1,
    animationDuration: 50,
    dragThreshold: 50,
    swipeThreshold: 50,
    touchRatio: 1,
    touchAngle: 90,
    keyboard: false,
    swipeThreshold: false,
  dragThreshold: false,
  })

  const $carSection = $('.carSection')
  const $carBackground = $('.carBackground')
  const $infoSection = $('.infoSection')
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)

  
  $carBackground.hide()
  $carSection.hide()
  $infoSection.hide()
  
  function showCurrentCarSection() {
    setTimeout(() => {
      $carSection.hide()
    	let $carName = $('.glide__slide--active').attr('class').split(' ')[1]
    	let $findCarSection = $('.' + $carName + 'Section')
    	$findCarSection.show()
    }, 125)
  }
  
  function resetStyles() {
    if (isMobile == true || window.innerWidth <= 900) {
    	$('.glide__slide--active').css('filter', 'none')
      $('.glide__slide').css('filter', 'none')
    } else {
    	$('.glide__slide--active').prev().prev().prev().css('filter', 'none')
    	$('.glide__slide--active').next().next().next().css('filter', 'none')
    	$('.glide__slide--active').prev().prev().css('filter', 'none')
    	$('.glide__slide--active').next().next().css('filter', 'none')
    }
  }
 
  function setStyles() {
    setTimeout(() => {
      if (isMobile == true || window.innerWidth <= 900) {
      	$('.glide__slide--active').prev().css('filter', 'blur(1px)')
      	$('.glide__slide--active').next().css('filter', 'blur(1px)')
      } else {
      	$('.glide__slide--active').prev().prev().prev().css('filter', 'blur(2px)')
      	$('.glide__slide--active').next().next().next().css('filter', 'blur(2px)')
     	  $('.glide__slide--active').prev().prev().css('filter', 'blur(1px)')
      	$('.glide__slide--active').next().next().css('filter', 'blur(1px)')
      }
    }, 125)
  }
  
    function resetInfoStyles() {
      $('.infoBtn').find('.widget-text').text('rozwiń')
    	$('.infoBtn').removeClass('infoBtnActive')
    	$('.infoIcon').removeClass('infoIconActive')
    	$('.infoBtn').find('.widget-text').removeClass('infoBtnText')
      $('.infoSection').slideUp()
    }
  
  function showInfoSection() {
    resetInfoStyles()
    setTimeout(() => {
      let $carName = $('.glide__slide--active').attr('class').split(' ')[1]
      let $carNameUpper = $carName[0].toUpperCase() + $carName.slice(1)
      let $findCarSection = $('.' + 'info' + $carNameUpper)
      $findCarSection.prev().find('div.widget-overlay').click()
    }, 155)
  }
  
    function carouselImgStyles() {
    $('.glide__slide').find('img').removeClass('slideClose slideFurther slideFurthest')
    setTimeout(() => {
      $('.glide__slide--active').next().find('img').addClass('slideClose')
      $('.glide__slide--active').prev().find('img').addClass('slideClose')
      $('.glide__slide--active').next().next().find('img').addClass('slideFurther')
      $('.glide__slide--active').prev().prev().find('img').addClass('slideFurther')
      $('.glide__slide--active').next().next().next().find('img').addClass('slideFurthest')
      $('.glide__slide--active').prev().prev().prev().find('img').addClass('slideFurthest')
    }, 135)
  }
  
      if (isMobile == false || !window.innerWidth <= 900) {
  document.querySelector('.astraHatchback').addEventListener('click', () => {
    glide.go('=0')
  })
  
  document.querySelector('.astraTourer').addEventListener('click', () => {
    glide.go('=1')
  })
    
  document.querySelector('.crossland').addEventListener('click', () => {
    glide.go('=2')
  })
      
  document.querySelector('.grandland').addEventListener('click', () => {
    glide.go('=3')
  })
        
  document.querySelector('.combo').addEventListener('click', () => {
    glide.go('=4')
  })
  
  document.querySelector('.insignia').addEventListener('click', () => {
    glide.go('=5')
  })
        
  document.querySelector('.corsa').addEventListener('click', () => {
    glide.go('=6')
  })
  }
  
    glide.on('swipe.end', () => {
    	resetStyles()
    	$carBackground.hide()
    	$carBackground.fadeIn(250)
    	showCurrentCarSection()
    	setStyles()
    	showInfoSection()
    	carouselImgStyles()
    })
    
if (isMobile == true || window.innerWidth <= 900) {
  glideMobile.mount()
  } else glide.mount()
