var table = document.getElementById('age-table');
var labelInTable = table.getElementsByTagName('label');
var firstCell = table.getElementsByTagName('td')[0];
var secondForm = document.getElementsByTagName('form')[1];
var searchForm = document.getElementsByName('search')[0];
var searchFormInput = searchForm.getElementsByTagName('input')[0];
var info0ElementViaDocument = document.getElementsByName('info[0]')[0];
var info0ElementViaForm = document.forms['search-person'].elements['info[0]'];

checkInsideTable(document.getElementById('age-list'));  // true
checkInsideTable(document.forms.search);        // false
checkInsideTable(document.getElementById('non-existant-id')); // false

function checkInsideTable (elemen) {
    var table = document.getElementById('age-table');
    var result = table.elements[elemen];
    return result;
}