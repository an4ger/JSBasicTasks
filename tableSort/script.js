document.getElementById('grid').onclick = function(e) {
    var event = e || window.event,
        target = event.target || event.srcElement,
        colNum=target.cellIndex;
    while (this != target) {
        if (target.nodeName === 'TH') {
            sortCell();
        }
        target = target.parentNode;
    }
    function sortCell() {
        var tbody = document.getElementById('grid').children[1],
            trArray = tbody.getElementsByTagName('tr'),
            tdArray = [];
        for (var i = 0, len = trArray.length; i < len; i++) {
            tdArray.push(tbody.children[i]);
        }
        tdArray.sort(tdSort);
        for (i=0; i<tdArray.length; i++) {
            tbody.appendChild(tdArray[i]);
        }
    }
        function tdSort(rowA, rowB) {
            return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML || (rowA.cells[colNum].innerHTML >
                   rowB.cells[colNum].innerHTML ? 1 : -1);
        }
};