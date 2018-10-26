$(document).ready(function () {
    var wrapper = $('body');

    // Button to hide and show the sideMenu
    $('#ad-menu-toggle').click(function () {
        $('ad-left').toggleClass('ad-hide');
    });

    //Header Fixed
    $(window).scroll(function () {
        var header = $('.scrollFixed'),
            scroll = $(window).scrollTop();

        if (scroll >= 58) {
            header.addClass('ad-fixed');
            $('.logo1').css('display', 'none');
            $('.logo2').css('display', 'block');
        } else {
            header.removeClass('ad-fixed');
            $('.logo1').css('display', 'block');
            $('.logo2').css('display', 'none');
        }
    });

    // Nav

    function checkNav() {
        if ($('.ad-nav #menuTrigger').length != 0) {
            // console.log('nav found menuTrigger found');
            var adLogo = $('.ad-nav .ad-logo').html();
            var adMenu = $('.ad-nav .ad-menu').html();
            wrapper.prepend(
                '<div class="menuTriggered"><div class="ad-logo">' +
                adLogo +
                '</div>' +
                adMenu +
                '</div>'
            );
        }
    }

    checkNav();

    $('#menuTrigger').click(function () {
        $('.menuTriggered').toggleClass('ad-show');
    });

    // smoothScrolling

    $('a[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, '') ==
            this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

            if (target.length) {
                $('html,body').animate({
                        scrollTop: target.offset().top
                    },
                    1000
                );
                return false;
            }
        }
    });


});