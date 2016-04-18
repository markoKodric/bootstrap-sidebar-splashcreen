function move() {
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 0.06);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width+=0.2;
            elem.style.width = width + '%';
        }
    }
}