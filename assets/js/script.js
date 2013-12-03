$('.nav .article-nav-block h3').click(function() {
    var $menu = $(this).closest('.menu');
    if (!$menu.hasClass('active')) {
        $('.nav .article-nav-block .active').removeClass('active');
    }
    $menu.toggleClass('active');
});
$('.gotoTop a').html('');
