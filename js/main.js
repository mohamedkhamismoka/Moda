$("document").ready(function() {
    $(".navbar-toggler").click(function() {
        if ($(".navbar-nav").css("display") == "none") {
            $(".navbar-nav").css("display", "block")
        } else {
            $(".navbar-nav").css("display", "none")
        }

    })

    $("#accordion a").click(function() {

        if ($(this).siblings().find("path ").first().css("opacity") == "1") {

            $(this).siblings().find("path").css("opacity", "1")
            $(this).siblings().find("path ").first().css("opacity", "0")
        } else {
            $(this).siblings().find("path").css("opacity", "0")
            $(this).siblings().find("path").first().css("opacity", "1")
        }

    })

    $(".to-top").click(function() {
        window.scrollTo(0, 0);

    })

    $(".to-top").hover(function() {
        $(this).css("opacity", "1")

    })

    $(".to-top").mouseleave(function() {
        $(this).css("opacity", "0.5")

    })

    $(window).scroll(function() {
        if (window.pageYOffset > 0) {
            $("nav").addClass("scroll");
        } else {
            $("nav").removeClass("scroll");
        }



        if (window.scrollY > 480) {
            $(".to-top").css("opacity", "0.7")
        } else {
            $(".to-top").css("opacity", "0")
        }
    })

})