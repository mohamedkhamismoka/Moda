$("document").ready(function() {
    $(".navbar-toggler").click(function() {
        if ($(".navbar-nav").css("display") == "none") {
            $(".navbar-nav").css("display", "block")
        } else {
            $(".navbar-nav").css("display", "none")
        }

    })
})