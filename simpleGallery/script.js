document.getElementById('thumbs').onclick = function(e) {
    var event = e || window.event,
        target = event.target || event.srcElement,
        largeImg = document.getElementById('largeImg');
    while(target != this) {
        if (target.tagName == 'A') {
            largeImg.src = target.href;
            return false;
        }
        target = target.parentNode;
    }
};