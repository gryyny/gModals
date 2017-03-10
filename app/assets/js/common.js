$(document).ready(function() {
    // Elements to inject
    var mySVGsToInject = document.querySelectorAll('img.inject-me');

    // Do the injection
    SVGInjector(mySVGsToInject);

    // popups init
    $('.popup-wr').each(function () {
        var $self = $(this);
        $self.on('click','.popup-overlay, .close, [data-close]', function (e) {
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

function showPopup(id) {
    if (id.substring(0, 1) != '#') {
        id = '#' + id;
    }
    $(id).addClass('show effect');
}

function closePopup(id) {
    if (id.substring(0, 1) != '#') {
        id = '#' + id;
    }
    $(id).removeClass('effect');
    setTimeout(function () {
        $(id).removeClass('show');
    },500);
}