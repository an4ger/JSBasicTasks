document.getElementById('contents').onclick = function(event) {
    var e = event || window.event,
        target = e.target || e.srcElement,
        request;
    while (this != target) {

        //if node 'A' and confirm 'cancel' - don't open url
        if (target.nodeName === 'A' && !(confirm('Open' + ' ' + target.href + '?'))) {
            return false;
        }
        target = target.parentNode;
    }
}