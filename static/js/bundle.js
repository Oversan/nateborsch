var koiKoiImages = [
  'static/img/static/vis/koi_koi/koi_koi_1_big.jpg',
  'static/img/static/vis/koi_koi/koi_koi_2_big.jpg',
  'static/img/static/vis/koi_koi/koi_koi_3_big.jpg',
  'static/img/static/vis/koi_koi/koi_koi_4_big.jpg',
  'static/img/static/vis/koi_koi/koi_koi_5_big.jpg',
  'static/img/static/vis/koi_koi/koi_koi_6_big.jpg',
  'static/img/static/vis/koi_koi/koi_koi_7_big.jpg',
  'static/img/static/vis/koi_koi/koi_koi_8_big.jpg',
  'static/img/static/vis/koi_koi/koi_koi_9_big.jpg',
  'static/img/static/vis/koi_koi/koi_koi_10_big.jpg',
  'static/img/static/vis/koi_koi/koi_koi_11_big.jpg',
  'static/img/static/vis/koi_koi/koi_koi_12_big.jpg',
  'static/img/static/vis/koi_koi/koi_koi_13_big.jpg',
  'static/img/static/vis/koi_koi/koi_koi_14_big.jpg',
  'static/img/static/vis/koi_koi/koi_koi_15_big.jpg',
  'static/img/static/vis/koi_koi/koi_koi_16_big.jpg',
  'static/img/static/vis/koi_koi/koi_koi_17_big.jpg',
];

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
        enabled: true
      }
    })
  })

  $('#koi-koi-gallery').magnificPopup({
    items: [
      {
        src: '/panorama-livingroom.html',
        type: 'iframe'
      },
      ...koiKoiImages.map(src => ({
        src,
        type: 'image'
      }))
    ],
    gallery: {
      enabled: true,
    },
    type: 'image',
    showCloseBtn: false,
    preloader: true,
  });

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
