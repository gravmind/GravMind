function include(url) {
    document.write('<script type="text/javascript" src="' + url + '"></script>')
}

//------ base included scripts -------//
include('js/jquery.easing.js');
include('js/jquery.mousewheel.min.js');
include('js/jquery-ui-1.10.3.custom.min.js');
include('js/jquery.ui.touch-punch.js');
include('js/jquery.touchSwipe.min.js');
include("js/jquery-migrate-1.1.1.js");
include('js/klass.min.js');
include('js/spin.min.js');
include('js/tmMultimediaGallery.js');
include('js/camera.js');
include('js/jquery.equalheights.js');
include('js/runtime.js');
include('js/mailform/jquery.rd-input-label.js')
include('js/mailform/jquery.form.min.js');
include('js/mailform/jquery.rd-mailform.min.js');


/* Stellar.js
 ========================================================*/
// include('js/stellar/jquery.stellar.js');
// $(document).ready(function() { 
//   if ($('html').hasClass('desktop')) {
//       $.stellar({
//         horizontalScrolling: false,
//         verticalOffset: -50
//       });
//   }  
// });

//include('js/TMForm.js');
/*
 <!--[if (gt IE 9)|!(IE)]><!-->
 include('js/jquery.mobile.customized.min.js');
 <!--<![endif]-->
 */

//include('js/jquery.equalheights.js');

if (!FJSCore.mobile && !FJSCore.tablet) {
    include('js/jquery.superscrollorama.js');
    include('js/smoothing-scroll.js');
}

if (!FJSCore.mobile) {

    include('js/hoverIntent.js');
    include('js/superfish.js');
    include('js/greensock/TweenMax.min.js');
    //include('js/TMgalleryPrototype.js');
} else {

}
//------------------------------------//
var win = $(window),
    doc = $(document),
    currentIndex = 1,
    previousState = currentState = '',
    defLocation,
    msie = (navigator.appVersion.indexOf("MSIE") !== -1);
showGallery = false;
cont_position_flag = 0;


function spinnerInit() {
    var opts = {
            lines: 11,
            length: 10,
            width: 5,
            radius: 14,
            corners: 1,
            color: '#fff',
            speed: 1.3,
            trail: 5
        },
        spinner = new Spinner(opts).spin($('#webSiteLoader')[0]);
}

function spinnerInitGallery() {
    var opts = {
        lines: 11,
        length: 10,
        width: 5,
        radius: 14,
        corners: 1,
        color: '#fff',
        speed: 1.3,
        trail: 5
    }
    $('.imgSpinner').each(function () {
        var spinner = new Spinner(opts).spin($(this)[0]);
    })
}


function initPlugins() {

    // initContactForm();

    (!FJSCore.mobile && previousState && (FJSCore.state != previousState)) && ($('.historyBack').attr('href', './' + previousState));

    if (!FJSCore.mobile) {
    }


}

function initFullGallery() {
    console.log(currentIndex);
    $('.gallery_1 .gall_item').on('click', function (e) {
        currentIndex = Number($(this).attr('data-gall-number')) - 1;

        //return false;
    });

    $('.close-icon').on('click', function () {
        $fullGallery && $fullGallery.trigger('hideGallery');
    })

    $fullGallery = $(".galleryHolder");
    $fullGallery.tmMultimediaGallery({
        startIndex: currentIndex,
        showOnInit: true,
        container: '.galleryContainer',
        imageHolder: '.imageHolder',
        next: '.nextButton',
        prev: '.prevButton',
        prev: '.prevButton',
        pagination: '.inner',
        spinner: '.imgSpinner',
        animationSpeed: '1.2',
        autoPlayState: false,
        controlDisplay: true,
        paginationDisplay: true,
        autoPlayTime: 12,
        alignIMG: 'center',
        mobile: FJSCore.tablet,
        onShowActions: function () {
            setTimeout(function () {
                $('.controls-holder, .close-icon').addClass('show-item');
                win.trigger('resize');
            }, 500);
        },
        onHideActions: function () {
            $('.controls-holder, .close-icon').removeClass('show-item');
            $('.galleryContainer').removeClass('showGallery');
        }
    });

    win.trigger('resize');

    $('.full-btn').on('click', function () {
        toggleFullScreen();
    });

    // spinnerInit();
}


function scrolloramaInit() {
    if (!FJSCore.mobile && !FJSCore.tablet) {
        var controller = $.superscrollorama();

        controller
            // page 1
            .addTween('.rocket-fire', TweenMax.from($('.rocket-fire'), 0.8, {
                delay: 0.4,
                css: {opacity: 0, scale: 0.2, rotationY: 270},
                ease: Expo.easeOut
            }), 0, -350)
            .addTween('h1 a span', TweenMax.from($('h1 a span'), 0.6, {
                delay: 0.8,
                css: {opacity: 0, rotationX: 90, scale: 0.2},
                ease: Cubic.easeOut
            }), 0, -350)
            .addTween('h1 a em', TweenMax.from($('h1 a em'), 0.6, {
                delay: 1.2,
                css: {opacity: 0, rotationX: 90, scale: 0.2},
                ease: Cubic.easeOut
            }), 0, -350)
            .addTween('.start', TweenMax.from($('.start'), 0.0, {
                delay: 1.8,
                css: {opacity: 0, rotationX: 180, transformOrigin: "bottom 50% -300"},
                ease: Cubic.easeOut
            }), 0, -350)
            .addTween('.scroll_logo', TweenMax.from($('.scroll_logo'), 0.8, {
                delay: 1.8,
                css: {opacity: 0, scale: 0.2},
                ease: Cubic.easeOut
            }), 0, -350)
            .addTween('.copyright', TweenMax.from($('.copyright'), 0.9, {
                delay: 1.8,
                css: {opacity: 0, scale: 0.2},
                ease: Cubic.easeOut
            }), 0, -450)
            // page 2

            .addTween('#page2 h2', TweenMax.from($('#page2 h2'), 1.0, {
                delay: 0.8,
                css: {opacity: 0, rotationY: 270, transformOrigin: "left 50% -200"},
                ease: Cubic.easeOut
            }), 0, -250)
            .addTween('.p2_pic1', TweenMax.from($('.p2_pic1'), 1.0, {
                delay: 0.8,
                css: {opacity: 0, rotationY: -270, transformOrigin: "right 50% -200"},
                ease: Cubic.easeOut
            }), 0, -250)
            .addTween('#page2 h3', TweenMax.from($('#page2 h3'), 1.0, {
                delay: 1.0,
                css: {opacity: 0, rotationY: 270, transformOrigin: "left 50% -200"},
                ease: Cubic.easeOut
            }), 0, -250)
            .addTween('#page2 h4', TweenMax.from($('#page2 h4'), 1.0, {
                delay: 1.0,
                css: {opacity: 0, rotationY: -270, transformOrigin: "right 50% -200"},
                ease: Cubic.easeOut
            }), 0, -250)
            .addTween('.p2_txt_1', TweenMax.from($('.p2_txt_1'), 1.0, {
                delay: 1.2,
                css: {opacity: 0, rotationY: 270, transformOrigin: "left 50% -200"},
                ease: Cubic.easeOut
            }), 0, -250)
            .addTween('.list_1', TweenMax.from($('.list_1'), 1.0, {
                delay: 1.4,
                css: {opacity: 0, rotationY: -270, transformOrigin: "right 50% -200"},
                ease: Cubic.easeOut
            }), 0, -250)


            // page 3
            .addTween('.slider_box', TweenMax.from($('.slider_box'), 1.0, {
                delay: 1.0,
                css: {opacity: 0, rotationY: 180, transformOrigin: "left 50% -100"},
                ease: Cubic.easeOut
            }), 0, -250)
            .addTween('.p3_pic1', TweenMax.from($('.p3_pic1'), 1.0, {
                delay: 0.8,
                css: {opacity: 0, rotationY: -270, transformOrigin: "right 50% -200"},
                ease: Cubic.easeOut
            }), 0, -450)
            .addTween('#page3 h4', TweenMax.from($('#page3 h4'), 1.0, {
                delay: 1.0,
                css: {opacity: 0, rotationY: -270, transformOrigin: "right 50% -200"},
                ease: Cubic.easeOut
            }), 0, -250)
            .addTween('#page3 h3', TweenMax.from($('#page3 h3'), 1.0, {
                delay: 1.3,
                css: {opacity: 0, rotationY: -270, transformOrigin: "right 50% -200"},
                ease: Cubic.easeOut
            }), 0, -250)
            .addTween('.btn_2', TweenMax.from($('.btn_2'), 0.9, {
                delay: 0.1,
                css: {opacity: 0, scale: 0.2},
                ease: Cubic.easeOut
            }), 0, -650)


// page 4

            .addTween('.list_2', TweenMax.from($('.list_2'), 1.0, {
                delay: 1.4,
                css: {opacity: 0, rotationY: 270, transformOrigin: "left 50% -200"},
                ease: Cubic.easeOut
            }), 0, -300)
            .addTween('.btn_3', TweenMax.from($('.btn_3'), 0.9, {
                delay: 0.1,
                css: {opacity: 0, scale: 0.2},
                ease: Cubic.easeOut
            }), 0, -400)
            .addTween('.p4_pic1', TweenMax.from($('.p4_pic1'), 1.0, {
                delay: 0.8,
                css: {opacity: 0, rotationY: -270, transformOrigin: "right 50% -200"},
                ease: Cubic.easeOut
            }), 0, -200)
            .addTween('#page4 h4', TweenMax.from($('#page4 h4'), 1.0, {
                delay: 1.0,
                css: {opacity: 0, rotationY: -270, transformOrigin: "right 50% -200"},
                ease: Cubic.easeOut
            }), 0, -300)
            .addTween('#page4 h3', TweenMax.from($('#page4 h3'), 1.0, {
                delay: 1.3,
                css: {opacity: 0, rotationY: -270, transformOrigin: "right 50% -200"},
                ease: Cubic.easeOut
            }), 0, -300)
            .addTween('#page4 .p1', TweenMax.from($('#page4 .p1'), 1.0, {
                delay: 1.5,
                css: {opacity: 0, rotationY: -270, transformOrigin: "right 50% -200"},
                ease: Cubic.easeOut
            }), 0, -300)


            // page 5
            .addTween('.list_3', TweenMax.from($('.list_3'), 1.0, {
                delay: 1.4,
                css: {opacity: 0, rotationY: 270, transformOrigin: "left 50% -200"},
                ease: Cubic.easeOut
            }), 0, -300)
            .addTween('.btn_4', TweenMax.from($('.btn_4'), 0.9, {
                delay: 0.1,
                css: {opacity: 0, scale: 0.2},
                ease: Cubic.easeOut
            }), 0, -400)
            .addTween('.p5_pic1', TweenMax.from($('.p5_pic1'), 1.0, {
                delay: 0.8,
                css: {opacity: 0, rotationY: -270, transformOrigin: "right 50% -200"},
                ease: Cubic.easeOut
            }), 0, -350)
            .addTween('#page5 h4', TweenMax.from($('#page5 h4'), 1.0, {
                delay: 1.0,
                css: {opacity: 0, rotationY: -270, transformOrigin: "right 50% -200"},
                ease: Cubic.easeOut
            }), 0, -300)
            .addTween('#page5 h3', TweenMax.from($('#page5 h3'), 1.0, {
                delay: 1.3,
                css: {opacity: 0, rotationY: -270, transformOrigin: "right 50% -200"},
                ease: Cubic.easeOut
            }), 0, -300)
            .addTween('#page5 .p1', TweenMax.from($('#page5 .p1'), 1.0, {
                delay: 1.5,
                css: {opacity: 0, rotationY: -270, transformOrigin: "right 50% -200"},
                ease: Cubic.easeOut
            }), 0, -300)
            .addTween('.btn_5', TweenMax.from($('.btn_5'), 0.9, {
                delay: 0.1,
                css: {opacity: 0, scale: 0.2},
                ease: Cubic.easeOut
            }), 0, -400)


            // page 6
            .addTween('#page6 h2', TweenMax.from($('#page6 h2'), 1.0, {
                delay: 0.8,
                css: {opacity: 0, rotationY: 270, transformOrigin: "left 50% -200"},
                ease: Cubic.easeOut
            }), 0, -350)
            .addTween('address', TweenMax.from($('address'), 1.0, {
                delay: 1.2,
                css: {opacity: 0, rotationY: 270, transformOrigin: "left 50% -200"},
                ease: Cubic.easeOut
            }), 0, -350)
            .addTween('.p6_pic1', TweenMax.from($('.p6_pic1'), 1.0, {
                delay: 0.8,
                css: {opacity: 0, rotationY: -270, transformOrigin: "right 50% -200"},
                ease: Cubic.easeOut
            }), 0, -350)
            .addTween('#page6 h4', TweenMax.from($('#page6 h4'), 1.0, {
                delay: 1.0,
                css: {opacity: 0, rotationY: -270, transformOrigin: "right 50% -200"},
                ease: Cubic.easeOut
            }), 0, -300)
            .addTween('#page6 h3', TweenMax.from($('#page6 h3'), 1.0, {
                delay: 1.3,
                css: {opacity: 0, rotationY: -270, transformOrigin: "right 50% -200"},
                ease: Cubic.easeOut
            }), 0, -300)
            .addTween('.btn_6', TweenMax.from($('.btn_6'), 0.9, {
                delay: 0.1,
                css: {opacity: 0, scale: 0.2},
                ease: Cubic.easeOut
            }), 0, -400)


    }
}


$(document).on('changeLocation', function (e) {
    previousState = currentState;
    currentState = history.state;

})

$(document).on('changeState', function (e) {
    //   console.log(previousState);
    //   console.log(currentState);

    // if(currentState == "gallery.html"){
    //     $(FJSCore).trigger('changeState','gallery')
    // }

    //((previousState === currentState) && (currentState === 'gallery.html')) && (showGallery = true);
})

$(function () {


    $(document).on('scroll', function () {
        if (win.scrollTop() > 0) {
            //$('.mainNav').addClass('head_bg');
            $('.logo2').stop().animate({'top': '60px'}, 200);
            $('.gallery_button').stop().animate({'bottom': '120px'}, 200);
            $('.menu_close').stop().animate({'top': '60px'}, 200);
            if (cont_position_flag == 1) {
                $('.mainNav').stop().animate({'top': '0px'}, 200);

            }
        } else {
            //$('.mainNav').removeClass('head_bg');
            $('.logo2').stop().animate({'top': '-100px'}, 200);
            $('.gallery_button').stop().animate({'bottom': '-100px'}, 200);
            $('.menu_close').stop().animate({'top': '-100px'}, 200);
            $('.mainNav').stop().animate({'top': '-500px'}, 200);

        }
    })
    $("#year").text((new Date).getFullYear());
    $("#year1").text((new Date).getFullYear());

    previousState = currentState = history.state;

    /*var doMenuHide = false;*/

    $('#mainNav>ul>li>a').each(function () {
        var $this = $(this),
            txt = $this.text();
        $this.html('<div><span>' + txt + '</span></div><div><span>' + txt + '</span></div>');
    })


    // camera
    $('#camera_wrap').camera({
        loader: true,
        pagination: true,
        thumbnails: false,
        height: '96.59574468085106%',
        caption: false,
        navigation: true,
        fx: 'scrollTop',
        autoAdvance: true
    });
    $('#camera_wrap_1').camera({
        loader: true,
        pagination: true,
        thumbnails: false,
        height: '63.85%',
        caption: true,
        navigation: true,
        fx: 'simpleFade',
        autoAdvance: true
    });

    $(".navigCamera .next_b").click(function () {
            $(".camera_next").click();
        }
    );
    $(".navigCamera .prev_b").click(function () {
            $(".camera_prev").click();
        }
    );
    // end camera

    initPlugins();

    if (FJSCore.mobile) {
        $('body').css({'min-width': 'inherit'});

        // $('#mobile-navigation > option').eq(2).remove();

        $(document)
            .on('show', '#mobile-content>*', function (e, d) {
                initPlugins();
                initFullGallery();

            })
            .on('hide', '#mobile-content>*', function (e, d) {
            })
    } else {
        $('#mainNav').superfish({
            animation: {height: 'show'},
            animationOut: {height: 'hide'},
            delay: 500
        });

        spinnerInit();
        scrolloramaInit();
    }

    var otherPageContainer = $('#other_pages'),
        $selector = !msie ? $('body') : $('html');
    otherPageContainer
        .on('show', '>*', function (e, d) {
            $.when(d.elements)
                .then(function () {
                    initFullGallery();
                    $('a[href="./' + FJSCore.state + '"]').parents('.item').trigger('click');

                    $('#category_pages .closeBtn').addClass('fa fa-times');

                    if (!d.curr.hasClass('_active')) {
                        d.curr
                            .stop()
                            .css({
                                display: 'block'
                                , opacity: 0
                            })
                            .animate({
                                opacity: 1
                            }, {
                                duration: 200
                                , complete: function () {
                                    d.curr.addClass('_active');
                                    win.trigger('resize');
                                }
                            })
                    }
                    initPlugins();
                    $('body').addClass('show-sub-pages');

                    d.curr
                        .addClass('activeSubPage')
                        .stop(true, true)
                        .css({display: 'block', top: -$(window).outerHeight()})
                        .animate({
                            top: 0
                        }, {
                            duration: 800,
                            ease: 'easeOutExpo',
                            complete: function () {
                                FJSCore.modules.longScroller.blockScrollCalc = true;
                                $selector
                                    .css({'overflow': 'hidden', '-webkit-overflow-scrolling': 'none'});
                                $('body')
                                    .trigger('resizeContent');
                            }
                        })
                })
        })
        .on('hide', '>*', function (e, d) {
            FJSCore.modules.longScroller.blockScrollCalc = false;
            $(this)
                .removeClass('activeSubPage')
                .stop(true, true)
                .animate({
                    top: -$(window).outerHeight()
                }, {
                    duration: 800,
                    ease: 'easeInExpo',
                    complete: function () {
                        $(this).css({display: 'none'});
                        $selector
                            .css({'overflow': 'visible', '-webkit-overflow-scrolling': 'touch'});
                        $('body').removeClass('show-sub-pages');
                        $('body')
                            .trigger('resizeContent');
                    }
                })
        })


})
/*---------------------- end ready -------------------------------*/

win
// .on('resize', onResize)
// .on('orientationchange', onResize)
    .load(function () {

        if (!FJSCore.mobile) {

            // var cont_position_flag=0;

            $('.mainNav').animate({'top': '-1000px'}, 200);

            $('.menu_close').click(function () {
                if (cont_position_flag == 0) {
                    $('.mainNav').stop().animate({'top': '0px'}, 200);
                    $(this).find("a").addClass("active");
                    cont_position_flag = 1;
                } else {
                    $('.mainNav').stop().animate({'top': '-500px'}, 200);
                    $(this).find("a").removeClass("active");
                    cont_position_flag = 0;
                }
                return false;

            });
        }


        $("#webSiteLoader").fadeOut(500, 0, function () {
            $(this).remove();
            win
                .trigger('resize')
                .trigger('scroll')
                .trigger('afterload');

            $('body').trigger('resizeContent');
        });

        FJSCore.modules.responsiveContainer({
            elementsSelector: '#other_pages>div',
            affectSelectors: '',
            type: 'inner',
            defStates: ',about,contacts,members'
        });

        win
            .trigger('resize');

        if (FJSCore.mobile) {
            //----- mobile scripts ------//
            $('#mobile-header>*').wrapAll('<div class="container"></div>');
            $('#mobile-footer>*').wrapAll('<div class="container"></div>');
        }
    });

