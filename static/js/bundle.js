$(function () {
  $('.magnetic-box').magnificPopup({
    type: 'image',
    removalDelay: 500,
    closeOnContentClick: true,
    showCloseBtn: false,
    preloader: true,
    autoFocusLast: false,
    mainClass: 'mfp-fade'
  })

  $('.magnetic-gallery').each(function() {
    $(this).magnificPopup({
      delegate: 'a',
      type: 'image',
      removalDelay: 500,
      closeOnContentClick: true,
      showCloseBtn: false,
      preloader: true,
      autoFocusLast: false,
      mainClass: 'mfp-fade',
      gallery: {
        enabled: true,
        arrowMarkup: ''
      }
    })
  })

  $('.open-popup-link').magnificPopup({
    type: 'inline',
    removalDelay: 500,
    showCloseBtn: false,
    midClick: true,
    autoFocusLast: false,
    mainClass: 'mfp-fade'
  })

  $('.header').find('.icon, li:not(.header-logo)').on('click', function() {
    $(this).parent().toggleClass('responsive')
  })
})
