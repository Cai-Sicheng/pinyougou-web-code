
window.onload = function() {
    var scan = document.querySelector('.scan')
    var account = document.querySelector('.account')
    var scanform = document.querySelector('.ScanForm')
    var accountContent = document.querySelector('.AccountContent')

    scan.onclick = function() {
        scanform.style.display = 'block'
        console.log(1);
        accountContent.style.display = 'none'
    }

    account.onclick = function() {
        accountContent.style.display = 'block'
        scanform.style.display = 'none'
    }
}


