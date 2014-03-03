var list = document.getElementById('ul_list'),
    previous,
    target;
list.onclick = function(e) {
    previous = target;
    e = e || event;
    target = e.target || window.event.srcElement;
    if (target.nodeName !== 'LI') retutn;
    if (e.ctrlKey) {
        clickAndCtrlKey();
    } else if (e.shiftKey) {
        clickAndShiftKey();
    } else {
        clear();
        target.className = 'selected';
    }
    list.onselectstart = list.onmousedown = function() {
        return false;
    };
    function clear() {
        for (var i = 0, len = list.children.length; i < len; i++) {
            list.children[i].className = '';
        }
    }
    function clickAndCtrlKey() {
        target.className = (target.className == '') ? 'selected' : '';
    }
    function clickAndShiftKey() {
        var previousId = 0,
            currentId,
            a,
            b;
    for (var i = 0, len = list.children.length; i < len; i++) {
        if (list.children[i] === previous) previousId = i;
        if (list.children[i] === target) currentId = i;
    }
    if(previousId > currentId){
        a = currentId;
        b = previousId;
    }
    else {
        b = currentId;
        a = previousId;
    }
    clear();
    while (a <= b) {
        list.children[b].className = 'selected';
        b--;
    }
    return false;
    }
};