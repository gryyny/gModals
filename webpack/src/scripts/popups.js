$(document).ready(function () {

  // popups init
  overlayFix();
  $('.popup-wr').each(function () {
    var $self = $(this);
    $self.on('click', '.popup-overlay, .close, [data-close]', function (e) {
      e.preventDefault();
      closePopup($self.attr('id'));
    });
  });

  $('[data-popup]').each(function () {
    $(this).on('click', function (e) {
      e.preventDefault();
      showPopup($(this).attr('data-popup'));
    });
  });
});

$(window).resize(function () {
  overlayFix();
});

function showPopup(id) {
  if (id.substring(0, 1) !== '#') {
    id = '#' + id;
  }
  setTimeout(function () {
    $(id).addClass('show effect');
    $('body').addClass('scroll-off');
  }, 10);
}

function closePopup(id) {
  if (id.substring(0, 1) !== '#') {
    id = '#' + id;
  }
  $(id).removeClass('effect');
  setTimeout(function () {
    $(id).removeClass('show');
    $('body').removeClass('scroll-off');
  }, 500);
}

function overlayFix() {
  var scrollWr = $('.popup-scroll');
  scrollWr.each(function () {
    var currentScrollWr = $(this);
    var currentOverlay = currentScrollWr.find('.popup-overlay');
    var maxOffset = currentScrollWr.find('.popup').height() - currentScrollWr.height();

    currentScrollWr.off('scroll', overlayShift);
    currentScrollWr.on('scroll', overlayShift);

    function overlayShift() {
      var offsetTop = parseFloat(currentScrollWr.scrollTop().toFixed(2));
      if (offsetTop > maxOffset) offsetTop = maxOffset;
      if (offsetTop < 0) offsetTop = 0;
      currentOverlay.css({top: offsetTop+'px'});
      console.log(currentScrollWr.scrollTop().toFixed(2));
    }
  });
}
