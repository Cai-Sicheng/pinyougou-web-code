window.onload = function() {
var tab_list = document.querySelector('.tab_list')
var lis = tab_list.querySelectorAll('li')
var items1 = document.querySelectorAll('.item1')
for( var i = 0; i < lis.length; i++) {
    lis[i].setAttribute('index1', i)
    lis[i].onclick = function() {
        for(var i = 0; i < lis.length; i++) {
            lis[i].className = ''
        }
        this.className = 'current'
        var index1 = this.getAttribute('index1')
        for (var i = 0; i < items1.length; i++) {
            items1[i].style.display = 'none'
        }
        items1[index1].style.display = 'block'
    }
}

var detail_tab_list = document.querySelector('.detail_tab_list')
var lis1 = detail_tab_list.querySelectorAll('li')
var items = document.querySelectorAll('.item')
for( var i = 0; i < lis1.length; i++) {
    lis1[i].setAttribute('index', i)
    lis1[i].onclick = function() {
        for(var i = 0; i < lis1.length; i++) {
            lis1[i].className = ''
        }
        this.className = 'current'

        var index = this.getAttribute('index')
        for (var i = 0; i < items.length; i++) {
            items[i].style.display = 'none'
        }
        items[index].style.display = 'block'
    }
}
}

