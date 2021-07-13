$(document).ready(function() {
    $("body").hide().fadeIn(1500);
    $("#content-images").hover(
        function() {
            $(this).animate({
                left: "0%"
            }, 1000, "easeInSine");
        },
        function() {
            $(this).animate({
                left: "-8%"
            }, 1500, "easeOutBounce");
        }
    );
});