



$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 100) {
            $(".header-main").addClass("header-scroll");
        } else {
            $(".header-main").removeClass("header-scroll");
        }
    });
});
$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 100) {
            $(".burger-menu-icon").addClass("burger-scroll");
        } else {
            $(".burger-menu-icon").removeClass("burger-scroll");
        }
    });
});

$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 300) {
            $(".scroll-button").addClass("scroll-button-scroll");
        } else {
            $(".scroll-button").removeClass("scroll-button-scroll");
        }
    });
});

$(function() {
    $(".burger-menu-icon").click(function() {
        $(".me-nav").addClass("active");
    });
});
$(function() {
    $(".closebtn").click(function() {
        $(".me-nav").removeClass("active");
    });
});



$(window).on('load', function() {
    /* ==============================================
       TESTIMONIALS-SLIDER -->
       =============================================== */
    $('.listing-slider').slick( {
            slidesToShow: 4, slidesToScroll: 1, autoplay: true, arrows:true, autoplaySpeed: 2000, responsive: [ {
                breakpoint: 1024, settings: {
                    slidesToShow: 3,
                }
            }
                , {
                    breakpoint: 768, settings: {
                        slidesToShow: 2,
                    }
                }
                , {
                    breakpoint: 480, settings: {
                        slidesToShow: 1,
                    }
                }
                
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
        }
    );

    $('.team-slider').slick( {
            slidesToShow: 3, slidesToScroll: 1, autoplay: true, arrows:false, autoplaySpeed: 2000, responsive: [ {
                breakpoint: 1024, settings: {
                    slidesToShow: 3,
                }
            }
                , {
                    breakpoint: 768, settings: {
                        slidesToShow: 1,
                    }
                }
                , {
                    breakpoint: 480, settings: {
                        slidesToShow: 1,
                    }
                }

                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
        }
    );


    /* ==============================================
    SCROLL -->
    =============================================== */
    $(function() {
            $("a.scroll").bind("click", function(event) {
                    event.preventDefault ? event.preventDefault(): event.returnValue=false;
                    var target=$(this).attr("href");
                    $("html, body").stop().animate( {
                            scrollLeft: $(target).offset().left, scrollTop: $(target).offset().top
                        }
                        , 1200);
                }
            );
        }
    );

});

function copyText(text) {
    /* Get the text field */
    // var copyText = document.getElementById("contract");

    // console.log(copyText.select())

    // /* Select the text field */
    // copyText.select();
    // copyText.setSelectionRange(0, 99999); /* For mobile devices */

    // /* Copy the text inside the text field */
    // navigator.clipboard.writeText(copyText.value);

    navigator.clipboard.writeText(text).then(() => {
        alert("successfully copied: "+ text);
      })
      .catch(() => {
        alert("something went wrong");
      });;


    /* Alert the copied text */
    // alert("Copied the text: " + text);
}

