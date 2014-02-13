var allLi = document.getElementsByTagName('li');
for (var i = 0; i < allLi.length; i++) {
    var liChild = allLi[i].getElementsByTagName('li');
    if (liChild.length > 0) {
        allLi[i].firstChild.data += '[' + liChild.length + ']';
    }
}