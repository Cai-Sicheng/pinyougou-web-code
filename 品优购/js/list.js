window.onload = function() {
    var goBack = document.querySelector(".goback")
// var irrow = document.getElementsByTagName('i')
var sk_container = document.querySelector('.sk_container')
var slider = document.querySelector('.slider-bar')
var sk_hd = document.querySelector('.sk_hd')

// 给返回页面注册单击事件
slider.onclick = function() {
    window.scroll(0, 0)
}

document.onscroll = function () {
    slider.style.top = window.pageXOffset;
    if(window.pageXOffset > sk_hd.scrollHeight) {
        slider.style.display = "block"
        slider.style.position = 'fixed'
        slider.style.right = '20px'
        slider.style.top = '0px'
    } else {
        slider.style.position = 'absolute'
        slider.style.right = '20px'
        slider.style.top = sk_hd.scrollHeight+300+'px'
        slider.style.display = "none"
    }
}
}