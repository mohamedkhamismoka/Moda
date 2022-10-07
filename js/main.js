$("document").ready(function() {
    $(".navbar-toggler").click(function() {
        if ($(".navbar-nav").css("display") == "none") {
            $(".navbar-nav").css("display", "block")
        } else {
            $(".navbar-nav").css("display", "none")
        }

    })

    $(window).scroll(function() {
        if (window.pageYOffset > 0) {
            $("nav").addClass("scroll");
        } else {
            $("nav").removeClass("scroll");
        }

    })

})