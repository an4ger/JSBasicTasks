var table = document.getElementsByTagName('table')[0];

delegate(table, 'click',
    function(elem) { return elem.tagName == 'TD'; },
    function(e) { e.style.color = e.style.color ? '' : 'red' }
);
function delegate(container, eventName, selector, action) {
    container.addEventListener(eventName, function(event) {
        var target = event.target;
        while (target != this) {
            if (selector(target)) {
                action(target);
                break;
            }
            target = target.parentNode;
        }
    }, false);
}