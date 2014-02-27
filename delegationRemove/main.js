document.getElementById('messages-container').onclick = function(e) {

    //get event in all browsers ('window.event' and 'event.srcElement' for IE8-)
    var event = e || window.event,
        target = event.target || event.srcElement;
    if (target.tagName == 'SPAN' && target.className == 'remove-button') {
        target.parentNode.style.display = 'none';
    }
};