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
    jQuery(function($) {
        $('.social-icons-jump a,' +
            '.social-icons-jump-bg a').each(function() {
            var $el = $(this);
            $el.append($el.find('i').clone());
});
        $('.social-icons-big a i').wrap('<span></span>');
    });
    // Home page Social on mouse over END
 
});