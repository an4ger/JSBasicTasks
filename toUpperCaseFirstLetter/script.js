var str = prompt('Write the word', '');
function ucFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
alert(ucFirst(str));