  function carBackgroundStyles() {
    $carBackground.hide()
    $carBackground.fadeIn(250)
  }
  
  $('.glide__arrow--left, .glide__arrow--right').click((event) => {
    	resetStyles()
    	carBackgroundStyles()
    	showCurrentCarSection()
    	setStyles()
    	showInfoSection()
    	carouselImgStyles()
    	setTimeout(() => {
        $('.glide__arrow').attr('disabled', true)
      }, 1)
      setTimeout(() => {
        $('.glide__arrow').css('pointer-events', 'none')
      }, 50)
      setTimeout(() => {
        $('.glide__arrow').attr('disabled', false)
        $('.glide__arrow').css('pointer-events', 'auto')
      }, 275)
  })
  
  $('.infoBtn').click((event) => {
    resetInfoStyles()
    const $findSection = $(event.target).parent().parent().parent().parent()
    $('.infoSection').slideUp()
    if ($findSection.next().is(':visible')) {
      event.preventDefault()
    } else {
        $findSection.next().slideDown()
        $(event.target).parent().parent().find('.infoIcon').addClass('infoIconActive')
        $(event.target).parent().addClass('infoBtnActive')
        $(event.target).siblings().addClass('infoBtnText')
        $(event.target).siblings().text('zwiń')
      }
    })
    
  $('.glide__slide, .glide__slides, .glide__track, .glide').one('click', (e) => {
    e.preventDefault()
    e.stopPropagation()
    e.stopImmediatePropagation()
  })                                                
    $('.glide__arrow--right').click()
    
      $('.iconPrev').click((event) => {
        event.preventDefault()
    $('.glide__arrow--left').click()
  })
  
  $('.iconNext').click((event) => {
    event.preventDefault()
    $('.glide__arrow--right').click()
  })
  
  $('.infoIcon').click((event) => {
    $(event.target).prev().find('.widget-overlay').click()
  })
  
  if (isMobile == true || window.innerWidth <= 900) {
    $('.glide__slide').find('img').click((event) => {
      if ($(event.target).parent().next().hasClass('glide__slide--active')) {
        setTimeout(() => {
          $('.glide__arrow--left').click()
        }, 155)
      } else if ($(event.target).parent().prev().hasClass('glide__slide--active')) {
        setTimeout(() => {
          $('.glide__arrow--right').click()
        }, 155)
      }
    })
  }
