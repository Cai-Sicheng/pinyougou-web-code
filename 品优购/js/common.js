window.addEventListener('DOMContentLoaded', function()  {
var dropdown=document.querySelector('.dropdown')
    var dd=document.querySelector('.dd')
      dropdown.onmouseover = function() {
          dd.style.display='block
        }
        dropdown.onmouseout = function() {
          dd.style.display='none'
        }
})
