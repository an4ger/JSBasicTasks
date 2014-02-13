console.log(checkInsideTable(document.getElementById('age-list')));  // true
console.log(checkInsideTable(document.forms.search));        // false
console.log(checkInsideTable(document.getElementById('non-existant-id'))); // false

function checkInsideTable(elem) {
    var table = document.getElementById('age-table');
    if(elem) {
        var result = table.querySelector(elem.nodeName);
        return !!result;
    }
    return false;
}