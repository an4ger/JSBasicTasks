var field = document.getElementById('field'),
    ball = document.getElementById('ball'),
    fieldCoords = (function (elem) {
        var box = elem.getBoundingClientRect(),
            body = document.body,
            docEl = document.documentElement,
            scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop,
            scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft,
            clientTop = docEl.clientTop || body.clientTop || 0,
            clientLeft = docEl.clientLeft || body.clientLeft || 0,
            top  = box.top +  scrollTop - clientTop,
            left = box.left + scrollLeft - clientLeft;
        return { top: Math.round(top), left: Math.round(left) };
    }(field));

field.onclick = function(event) {
    event = event || window.event;
    var xCursor = event.pageX,
        yCursor = event.pageY,
        ballTop = yCursor - fieldCoords.top - (field.offsetWidth - field.clientWidth)*1.5 ,
        ballLeft = xCursor - fieldCoords.left - (field.offsetHeight - field.clientHeight)*1.5;
    if (ballLeft <= 0) ball.style.left = 0;
    else if (ballLeft + ball.clientWidth > field.clientWidth) ball.style.left = field.clientWidth - ball.clientWidth +
        'px';
    else ball.style.left = ballLeft + 'px';
    if (ballTop <= 0) ball.style.top = 0;
    else if (ballTop + ball.clientHeight > field.clientHeight) ball.style.top = field.clientHeight - ball.clientHeight +
        'px';
    else ball.style.top = ballTop + 'px';
};
