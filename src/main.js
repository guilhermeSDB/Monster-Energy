$('.dot').click(function () {
    $('div.active').removeClass('active');
    $(this).toggleClass('active');
});