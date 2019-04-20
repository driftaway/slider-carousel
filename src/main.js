  const $carSection = $('.carSection')
  const $carBackground = $('.carBackground')

  $carBackground.hide()
  $carSection.hide()

  function checkIfCarMatches() {
      setTimeout(() => {
          let $carName = $('.glide__slide--active').attr('class').split(' ')[1]
          let $findCarSection = $('.' + $carName + 'Section')
          if ($findCarSection.is(':visible')) {
              return false
          } else {
              $carSection.hide()
              $findCarSection.show()
          }
      }, 250)
  }

  function showCurrentCarSection() {
      setTimeout(() => {
          $carSection.hide()
          let $carName = $('.glide__slide--active').attr('class').split(' ')[1]
          let $findCarSection = $('.' + $carName + 'Section')
          $findCarSection.show()
      }, 125)
  }


  $('.glide__arrow--right, .glide__arrow--left').click(() => {
      $carBackground.hide()
      $carBackground.fadeIn(250)
      showCurrentCarSection()
  })

  $('.glide__slide').mousedown(() => {
      $('.glide__slide').css('cursor', 'grabbing')
  })

  $('.glide__slide').mouseup(() => {
      $carBackground.hide()
      $carBackground.fadeIn(250)
      showCurrentCarSection()
      checkIfCarMatches()
      $('.glide__slide').css('cursor', 'grab')
  })