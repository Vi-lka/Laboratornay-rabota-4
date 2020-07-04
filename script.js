text.onclick = function(event) {
    document.getElementById("popup").setAttribute("style", "display: block; left:" + event.clientX + 'px;' + "top:" + event.clientY + 'px;');
    document.getElementById('text').setAttribute("style", "overflow: hidden;");
};
popup.onclick = function(event) {
    document.getElementById("popup").setAttribute("style", "display: none;");
    document.getElementById('text').setAttribute("style", "overflow: auto;");
};
