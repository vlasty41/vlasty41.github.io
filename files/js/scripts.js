$(document).ready(function() {
    $("#test").click(function() {
        document.getElementById("test").innerHTML = "JAVASCRIPT ✔️";
    });

    $(".links").hover(function() {
        this.style.background = "rgba(147, 255, 96, 0.6)";
        this.style["box-shadow"] = "0px 0px 20px rgba(147, 255, 96, 0.6)";
    });
    $(".links").on( "mouseleave", function() {
        this.style.background = "none";
        this.style["box-shadow"] = "none";
        this.style["box-shadow"] = "inset 0 0 20px white";
    })
    $("object").hover(function() {
        this.style["box-shadow"] = "0px 0px 20px rgba(147, 255, 96, 0.6)";
    });
    $("object").on( "mouseleave", function() {
        this.style["box-shadow"] = "none";
    })
    $("#carousel").hover(function() {
        this.style["box-shadow"] = "0px 0px 20px rgba(147, 255, 96, 0.6)";
    });
    $("#carousel").on( "mouseleave", function() {
        this.style["box-shadow"] = "none";
    })
})