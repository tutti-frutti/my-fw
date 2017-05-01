jQuery(document).ready(function ($) {
    $("#my-menu").mmenu({
        extensions: ['theme-black', 'fx-menu-slide', 'fx-listitems-slide', 'pagedim-black'],
        navbar: {
//            title: '<img src="assets/img/city-logo.jpg">'
        },
        offCanvas: {
            position: 'right'
        }
    });
    
    var api = $('#my-menu').data('mmenu');
    api.bind('open:finish', function(){
        $('.hamburger').addClass('is-active');
    });
    api.bind('close:finish', function(){
        $('.hamburger').removeClass('is-active');
    })
    
});