/*
Theme Name: IAMX
Author: Trendy Theme
Author URL: trendytheme.net
*/

/*
    = Preloader
    = Animated scrolling / Scroll Up
    = Full Screen Slider
    = Sticky Menu
    = Back To Top
    = Countup
    = Progress Bar
    = More skill
    = Shuffle
    = Magnific Popup
    = Vidio auto play
    = Fit Vids
    = Google Map

*/

jQuery(function ($) {

    'use strict';

    /* ---------------------------------------------- /*
     * Preloader
    /* ---------------------------------------------- */

    $(window).ready(function() {
        $('#pre-status').fadeOut();
        $('#tt-preloader').delay(350).fadeOut('slow');
    });




    // -------------------------------------------------------------
    // Animated scrolling / Scroll Up
    // -------------------------------------------------------------

    (function () {
        $('a[href*=#]').bind("click", function(e){
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top
            }, 1000);
            e.preventDefault();
        });
    }());



    // -------------------------------------------------------------
    // Full Screen Slider
    // -------------------------------------------------------------
    (function () {
        $(".tt-fullHeight").height($(window).height());

        $(window).resize(function(){
            $(".tt-fullHeight").height($(window).height());
        });

    }());


    // -------------------------------------------------------------
    // Sticky Menu
    // -------------------------------------------------------------

    (function () {
        $('.header').sticky({
            topSpacing: 0
        });

        $('body').scrollspy({
            target: '.navbar-custom',
            offset: 70
        })
    }());




    // -------------------------------------------------------------
    // Back To Top
    // -------------------------------------------------------------

    (function () {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 100) {
                $('.scroll-up').fadeIn();
            } else {
                $('.scroll-up').fadeOut();
            }
        });
    }());


    // -------------------------------------------------------------
    // Countup
    // -------------------------------------------------------------
    $('.count-wrap').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
        if (visible) {
            $(this).find('.timer').each(function () {
                var $this = $(this);
                $({ Counter: 0 }).animate({ Counter: $this.text() }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.ceil(this.Counter));
                    }
                });
            });
            $(this).unbind('inview');
        }
    });


    // -------------------------------------------------------------
    // Progress Bar
    // -------------------------------------------------------------
 
    $('.skill-progress').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
        if (visible) {
            $.each($('div.progress-bar'),function(){
                $(this).css('width', $(this).attr('aria-valuenow')+'%');
            });
            $(this).unbind('inview');
        }
    });
    
    // -------------------------------------------------------------
    // More skill
    // -------------------------------------------------------------
    $('.more-skill').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
        if (visible) {
            $('.chart').easyPieChart({
                //your configuration goes here
                easing: 'easeOut',
                delay: 3000,
                barColor:'#68c3a3',
                trackColor:'rgba(255,255,255,0.2)',
                scaleColor: false,
                lineWidth: 8,
                size: 140,
                animate: 2000,
                onStep: function(from, to, percent) {
                    this.el.children[0].innerHTML = Math.round(percent);
                }

            });
            $(this).unbind('inview');
        }
    });


    // -------------------------------------------------------------
    // Shuffle
    // -------------------------------------------------------------

    (function () {

        var $grid = $('#grid');

        $grid.shuffle({
            itemSelector: '.portfolio-item'
        });

        /* reshuffle when user clicks a filter item */
        $('#filter a').click(function (e) {
            e.preventDefault();

            // set active class
            $('#filter a').removeClass('active');
            $(this).addClass('active');

            // get group name from clicked item
            var groupName = $(this).attr('data-group');

            // reshuffle grid
            $grid.shuffle('shuffle', groupName );
        });


    }());


    // -------------------------------------------------------------
    // Magnific Popup
    // -------------------------------------------------------------

    (function () {
        $('.image-link').click(function(){
            alert("pressed");
        });
    }());

    // -------------------------------------------------------------
    // STELLAR FOR BACKGROUND SCROLLING
    // -------------------------------------------------------------

    $(window).load(function() {

        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
         
        }else {
            $.stellar({
                horizontalScrolling: false,
                responsive: true
            });
        }

    });


    // -------------------------------------------------------------
    // WOW JS
    // -------------------------------------------------------------

    (function () {

        new WOW({

            mobile:  false

        }).init();

    }());

});

$(".quotes").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    mobileFirst:true,
    autoplaySpeed: 1500,
});

$(document).ready(function(){
    var isMobile = false; //initiate as false
    // device detection
    if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
        || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
        isMobile = true;
    }

    if(isMobile) {
        $('.testimonial-check').hide();
    }
});

$(document).ready(function(){
    /* ---- particles.js config ---- */

    particlesJS("home", {
        "particles": {
        "number": {
            "value": 380,
            "density": {
            "enable": true,
            "value_area": 800
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
            "width": 0,
            "color": "#000000"
            },
            "polygon": {
            "nb_sides": 5
            },
            "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
            }
        }
        },
        "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
            "enable": true,
            "mode": "grab"
            },
            "onclick": {
            "enable": true,
            "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
            "distance": 140,
            "line_linked": {
                "opacity": 1
            }
            },
            "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
            },
            "repulse": {
            "distance": 200,
            "duration": 0.4
            },
            "push": {
            "particles_nb": 4
            },
            "remove": {
            "particles_nb": 2
            }
        }
        },
        "retina_detect": true
    });
});



