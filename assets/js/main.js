var typedWords = $("#typed-words");

jQuery(document).ready(function($) {
    "use strict";

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

    // Home page Social on mouse over slide up / down
        $('.social-icons-jump a,' + '.social-icons-jump-bg a').each(function() {
            var $el = $(this);
            $el.append($el.find('i').clone());
        });
        $('.social-icons-big a i').wrap('<span></span>');
    // Home page Social on mouse over END

    // Typewriter
    typedWords.typed({
        strings: [
            "A multi-disciplinary <span>Web<span>", 
            "And <span>Software</span> Developer.", 
            "More than <span>10 Year's</span> Experience.",
            "Mastery of the Web is my <span>Conquest</span>.",
            "Contact me If you want to <span>Join</span> Me."
        ],
        typeSpeed: 100,
        backDelay: 1000,
        loop: true,
        contentType: 'html', // or text
        // defaults to false for infinite loop
        loopCount: false
    });
 
});