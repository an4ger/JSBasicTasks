//add span tag, for click after li and hover effect in css
var liElements = document.getElementsByTagName('li'),
    tree = document.getElementById('tree'),
    span;
for (var i=0, len = liElements.length; i < len; i++) {
    span = document.createElement('span');

    //empty span in li
    liElements[i].insertBefore(span, liElements[i].firstChild);

    //move text node after span in span
    span.appendChild(span.nextSibling);
}

// delegation 
tree.onclick = function(event) {
    var e = event || window.event,
        target = e.target || e.srcElement,
        node = target.parentNode.getElementsByTagName('ul')[0];

    // no children
    if (!node) return;

    node.style.display = node.style.display ? '' : 'none';
};

//not selectable nodes
tree.onselectstart = tree.onmousedown = function() {
    return false;
};