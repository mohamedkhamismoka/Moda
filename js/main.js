$("document").ready(function() {
    $(".navbar-toggler").click(function() {
        if ($(".navbar-nav").css("display") == "none") {
            $(".navbar-nav").css("display", "block")
        } else {
            $(".navbar-nav").css("display", "none")
        }

    })

    function resetHeight() {
        // reset the body height to that of the inner browser
        document.body.style.height = window.innerHeight + "px";
    }
    // reset the height whenever the window's resized
    window.addEventListener("resize", resetHeight);
    // called to initially set the height.
    resetHeight();
})