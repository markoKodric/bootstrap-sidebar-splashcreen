$("#overlay").show();
$("#overlay-content").show();

setTimeout(function(){
    $("#overlay").fadeOut(800);
    $("#mainPage").fadeIn(2500);
}, 3000);