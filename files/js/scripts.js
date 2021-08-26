$(document).ready(function() {
    $("#test").click(function() {
        document.getElementById("test").innerHTML = "JAVASCRIPT ✔️";
    });
    $(".links").hover(function() {
        this.style.background = "rgba(147, 255, 96, 0.6)";
        this.style["box-shadow"] = "0px 0px 18px rgba(147, 255, 96, 0.6)";
    });
    $(".links").on( "mouseleave", function() {
        this.style.background = "gray";
        this.style["box-shadow"] = "none";
  })
})