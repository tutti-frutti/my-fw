jQuery(document).ready(function ($) {
    // mmenu
$(document).ready(function ($) {
    $("#my-menu").mmenu({
        extensions: ['theme-black', 'fx-menu-slide', 'fx-listitems-slide', 'pagedim-black'],
        navbar: {
            //            title: '<img src="assets/img/city-logo.jpg">'
        },
        offCanvas: {
            position: 'right'
        }
    });

//    var api = $('#my-menu').data('mmenu');
//    api.bind('open:finish', function () {
//        $('.hamburger').addClass('is-active');
//    });
//    api.bind('close:finish', function () {
//        $('.hamburger').removeClass('is-active');
//    })
});
    //    var api = $('#my-menu').data('mmenu');
    //    api.bind('open:finish', function () {
    //        $('.hamburger').addClass('is-active');
    //    });
    //    api.bind('close:finish', function () {
    //        $('.hamburger').removeClass('is-active');
    //    })

    // прокрутка по якорям
    $('.navigation').on('click', 'a', function (e) {
        e.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        console.log(top)
        $('body, html').animate({
            scrollTop: top
        }, 1500);
    });
    
    // табы
    $('.tab-content').hide();
    $('.tab-content:first').show();
    $('.tabs li:first').addClass('active');
    
    $('.tabs li').click(function(){
        $('.tabs li').removeClass('active');
        $(this).addClass('active');
        $('.tab-content').hide();
        var selectTab = $(this).find('a').attr('href');
        $(selectTab).fadeIn();
    });
    
    // video-btn
    $('#video__play').click(function(){
        var dataYoutube = $(this).parent('.js-video').attr('data-youtube');
        $(this).parent('.js-video').html('<iframe src="https://www.youtube.com/embed/' + dataYoutube + '?autoplay=1" frameborder="0" allowfullscreen></iframe>');
    });
    
    // language select
    $('.language-block').click(function(e){
        e.preventDefault;
       $('.nav-sub-list').slideToggle();
    });
    $('.nav-sub-list').on('click', '.language-add', function(e){
        var lang = $(this).attr('data-lang');
        $('.language-block').text(lang);
        $('.nav-sub-list').slideUp();
        e.preventDefault;
    })
    
    $('.toggle').click(function(e) {
  	e.preventDefault();
  
    var $this = $(this);
  
    if ($this.next().hasClass('show')) {
        $this.next().removeClass('show');
        $this.next().slideUp(350);
    } else {
        $this.parent().parent().find('li .inner').removeClass('show');
        $this.parent().parent().find('li .inner').slideUp(350);
        $this.next().toggleClass('show');
        $this.next().slideToggle(350);
    }
});
    
    $('#d-block')
    
});

    // range slider
//$( function() {
//    $( "#slider-range" ).slider({
//      range: true,
//      min: 0,
//      max: 500,
//      values: [ 0, 500 ],
//      slide: function( event, ui ) {
//        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
//      }
//    });
//    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
//      " - $" + $( "#slider-range" ).slider( "values", 1 ) );
//  } );
