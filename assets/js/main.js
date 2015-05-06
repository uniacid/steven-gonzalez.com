//Scroll speed and page animation Scrollto.js parameter        
var horizontal_scroll_speed = 1500 // speed Horizontal Scrollto parameter default #1200.

//animation sliding speed configure 
var menu_header_speed = 300 // on sub page topbar sliding down animation default #350
var menu_main_header_speed = 600 // home page middle bar sliding down animation default #800

//Scroll speed and page animation end

//content scrollbar (niceScroll) colour 
var niceScrollcursorcolor = "#ef9a00" // Set your content niceScroll color here!
var niceScrollscrollspeed = 100 // Set niceScroll speed, default value is 60
var niceScrollmousescrollstep = 80 // Set niceScroll speed with mouse wheel, default value is 40
var niceScrollsmoothscroll = true // Set true/ false  default true
var niceScrollcursorwidth = "12px" // Set cursor width in pixel, default is 5
var niceScrollcursorborder = 0 // Set niceScroll border color here! for example 2px solid #000000
var niceScrollcursordragontouch = true // Enable cursor drag scrolling
var niceScrollcursorborderradius = "20px" // Set niceScroll border radius for cursor, default is "4px"
var niceScrollautohidemode = true // Set the niceScroll visible or hidden
var niceScrollbackground = "#e9e9e9" // Set your niceScroll rails background color
var niceScrollhidecursordelay = 2500 // Set your niceScroll rails background color
var niceScrollhorizrailenabled = false // Set nicescroll horizontal scroll
var typedWords = $("#typed-words");

jQuery(document).ready(function($) {
    "use strict";

    var $window = (window);
    var $document = (document);

    $("#header-menu").click(function(e) {
        e.preventDefault();
    });
    $("#home-header").click(function(e) {
        e.preventDefault();
    });
    $(".nav-link").click(function(e) {
        e.preventDefault();
    });

    //Preloader
    $("body").jpreLoader({
        splashID: "#jSplash",
        showPercentage: !0,
        autoClose: !0,
        showSplash: true,
        splashFunction: function() {
            $("#circle").delay(1250).animate({
                opacity: 1
            }, 700, "linear");
        }
    });

    // Nice Scroll
    $(".content-scroll").niceScroll({
        cursorcolor: niceScrollcursorcolor,
        scrollspeed: niceScrollscrollspeed,
        mousescrollstep: niceScrollmousescrollstep,
        smoothscroll: niceScrollsmoothscroll,
        cursorwidth: niceScrollcursorwidth,
        cursorborder: niceScrollcursorborder,
        cursordragontouch: niceScrollcursordragontouch,
        cursorborderradius: niceScrollcursorborderradius,
        autohidemode: niceScrollautohidemode,
        background: niceScrollbackground,
        hidecursordelay: niceScrollhidecursordelay,
        horizrailenabled: niceScrollhorizrailenabled
    });

    $(".content-scroll").mouseover(function() {
        $(".content-scroll").getNiceScroll().resize();
    });
    // ./ Nice Scoll
    $('.social-icons-jump a,' +
        '.social-icons-jump-bg a').each(function() {
        var $el = $(this);
        $el.append($el.find('i').clone());
    });
    $('.social-icons-big a i').wrap('<span></span>');

    // Project Modal Carousel
    $('.carousel').carousel({
        interval: 3000
    })

    // IE9
    $('input[type=text], textarea').placeholder();

    // Typewriter
    typedWords.typed({
        strings: [
            "A multi-disciplinary <span>Web/Software<span>",
            "And <span>UX</span> Developer.",
            "More than <span>10 Year's</span> Experience.",
            "Mastery of the <span>Web</span> is my <span>Conquest</span>.",
            "Contact me If you want to <span>Join</span> Me."
        ],
        typeSpeed: 100,
        backDelay: 1000,
        loop: true,
        contentType: 'html', // or text
        // defaults to false for infinite loop
        loopCount: false
    });

    // Time of day
    var today = new Date();
    var timeNow = today.getHours();
    var greeting;
    
    if (timeNow >= 16 && timeNow <= 23) {
      greeting = 'Evening';
    }
    if (timeNow >= 1 && timeNow <= 11) {
        greeting = 'Morning';
    }
    if (timeNow >= 12 && timeNow <= 15) {
        greeting = 'Afternoon';
    }

    if (greeting != 'undefined')
        $('#home-slider-title .greeting').append(greeting);

    // Set hash
    var url = window.location.href;
    var type = url.split('#');
    var hash = '';

    if (type.length > 1) {
        hash = type[1];
    }

    if (hash != "") {
        var hash_fullname = "#" + hash;
        $("a[href='" + hash_fullname + "']").addClass('selected');
        if (hash_fullname == "#home") {
            // hiding subpage header 
            $('#header-menu').hide('fade', {
                direction: 'left',
                easing: 'easeInQuad'
            }, 1000);
            Animation("#header-menu", "fadeOutUp", "200");
        } else {
            // hiding Home page header 
            $('#home-header').hide('fade', {
                direction: 'left',
                easing: 'easeInQuad'
            }, 600);
            Animation("#home-header", "fadeOutDown", "200");
        }

        $('#wrapper').scrollTo(hash_fullname, 2000, {
            easing: 'easeInOutExpo',
            axis: 'x',
            onAfter: function() { // scrollto callback  function 
                    if (hash_fullname == "#home") { // for home page animation
                        //  Homepage_Animation();
                    } else { // sub page animation
                        if ($('#header-menu').is(':hidden')) { // if header is hidden then do animation
                            Subpage_animation();
                        }
                    }
                } // scrollto callback function close

        }); //   scrollto close
        window.location.hash = ''; // for older browsers, leaves a # behind
        history.pushState('', document.title, window.location.pathname); // nice and clean  
    }

    // nav
    $('.main-nav a.nav-link, a.nav-link').click(function(event) {
        console.log('firing nav event');
        var name = $(this).attr('href');

        if (name != '#') {
            console.log(name);

            if (name == '#home') {
                $('.selected').removeClass('selected');
                $("a[href='" + name + "']").addClass('selected');

                $('#header-menu').hide('fade', {
                    direction: 'left',
                    easing: 'easeInQuad'
                }, 1000);
                Animation('#header-menu', 'fadeOutUp', '200');
            } else {
                if (name != '') {
                    $('.selected').removeClass('selected');
                    $("a[href='" + name + "']").addClass('selected');
                    $('#home-header').hide('fade', {
                        direction: 'left',
                        easing: 'easeInQuad'
                    }, 600);
                    Animation('#home-header', 'fadeOutDown', '200');
                }
            }

            // scrollTo
            $('#wrapper').scrollTo($(this).attr('href'), horizontal_scroll_speed, {
                easing: 'easeInOutExpo',
                axis: 'x',
                onAfter: function() {
                    if (name == '#home') {
                        Homepage_Animation();
                        $("a[href='#home']").addClass('selected');
                    } else {
                        if ($('#header-menu').is(':hidden')) {
                            Subpage_animation();
                        }
                    }
                }
            });

            window.location.hash = '';
            history.pushState('', document.title, window.location.pathname);
        }
    });
    // ./nav

    // Nav Links
    $('#nav-scroll-menu').slicknav({
        label: '',
        duration: 1000,
        easingOpen: "easeOutQuint", //available with jQuery UI
        closeOnClick: true
    });

    // on hash change 
    window.onhashchange = function() {
        $('.selected').removeClass('selected');
        var hash = window.location.hash;
        if (hash != "") {
            $("a[href='" + hash + "']").addClass('selected');
        }
    }

    // on click navigation add class selected
    $("#header-menu ul.nav li a").click(function() {
        $('ul.nav li a').removeAttr('class');
        $(this).attr('class', 'nav-link selected');
    });

    // on external and internal page link 
    $('.link').click(function() {
        var name = $(this).attr('href');
        window.location.href = name;
    });
    // ./Nav Links

    //Animated Progress Bars
    $('.progress-bars li').each(function() {
        $(this).appear(function() {
            console.log('appearing!');
            $(this).animate({
                opacity: 1,
                left: "0px"
            }, 1200);
            var b = $(this).find("span").attr("data-width");
            $(this).find("span").animate({
                width: b + "%"
            }, 1700, "easeOutCirc");
        });
    });
});

// Custom
function modalshow(modalid) {
    $(modalid).modal('show');
}

function Animation(element, effect, timedelay) {
    $(element).delay(timedelay).removeClass().addClass(effect + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $(this).removeClass();
    });
};

function Homepage_Animation() {
    $('#home-header').show('fade', {
        easing: 'easeInQuad'
    }, menu_main_header_speed); //on homepage topbar sliding up animation 
    Animation("#home-header", "fadeInUp", "200");
    Animation("#spmenu1", "fadeInRight", "300");
    Animation("#spmenu2", "fadeInRight", "800");
    Animation("#spmenu3", "fadeInRight", "5000");
    Animation("#1", "fadeInLeft", "800");
    Animation("#2", "fadeInUp", "1800");
    Animation("#3", "fadeInDown", "800");
    Animation("#4", "fadeInLeft", "1800");
    Animation("#5", "fadeInRight", "800");
}

// sub page animation functions
function Subpage_animation() {
    Animation("#header-menu", "fadeInDown", "200");
    $('#header-menu').show('fade', {
        direction: 'top',
        easing: 'easeInQuad'
    }, menu_header_speed); //on sub page topbar sliding down animation 
}


/* // Progress bar animation start  */
// scroll to view element and used for bar and skills 
function isScrolledIntoView(elem) {
    var docViewTop = jQuery(window).scrollTop();
    var docViewBottom = docViewTop + jQuery(window).height();

    var elemTop = jQuery(elem).offset().top;
    var elemBottom = elemTop + jQuery(elem).height();

    return ((elemBottom <= (docViewBottom + jQuery(elem).height())) && (elemTop >= (docViewTop - jQuery(elem).height())));
}

// skills bar
function skillbarActive() {
    setTimeout(function() {

        jQuery('.progress-bar').each(function() {
            jQuery(this)
                .data("origWidth", jQuery(this)[0].style.width)
                .css('width', '1%').show();
            jQuery(this)
                .animate({
                    width: jQuery(this).data("origWidth")
                }, 50);
        });

        jQuery('.progress-bar .dot').each(function() {
            var me = jQuery(this);
            var perc = me.attr("data-percentage");

            var current_perc = 0;

            var progress = setInterval(function() {
                if (current_perc >= perc) {
                    clearInterval(progress);
                } else {
                    current_perc += 1;
                    me.text((current_perc) + '%');
                }
            }, 10);
        });
    }, 10);
}

// Progress bar animation end

// resize panel function
$(window).resize(function() {
    resizePanel();
});

function resizePanel() {
    width = $(window).width();
    height = $(window).height();

    mask_width = width * $('.slider-item').length;

    $('#debug').html(width + ' ' + height + ' ' + mask_width);

    $('#wrapper, .slider-item').css({
        width: width,
        height: height
    });
    $('#mask').css({
        width: mask_width,
        height: height
    });
    $('#wrapper').scrollTo($('a.selected').attr('href'), 0);

}

$(window).load(function() {
    var theWindow = $(window),
        $bg = $(".bg"),
        aspectRatio = $bg.width() / $bg.height();

    function resizeBg() {

        if ((theWindow.width() / theWindow.height()) < aspectRatio) {
            $bg
                .removeClass()
                .addClass('bgheight');
        } else {
            $bg
                .removeClass()
                .addClass('bgwidth');
        }
    }
    theWindow.resize(function() {
        resizeBg();
    }).trigger("resize");

});
