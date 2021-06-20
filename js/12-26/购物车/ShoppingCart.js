var checkItem = document.querySelectorAll('.checkItem')
var checkAll = document.querySelector('.checkAll')
var add = document.querySelectorAll('.add')
var goods = document.getElementById('goods')
var checkItemLength = checkItem.length
var count = document.querySelectorAll('.count')
var total = document.querySelector('.total')
var price = document.querySelectorAll('.price')
var checkCount = 0
var totals = total.innerText.slice(0,-1) * 1
checkAll.onchange = function () {
    if(this.checked){
        totals = 0.00
        for(let i = 0;i < checkItemLength;i++){
            checkItem[i].checked = true
            count[i].innerText = '1'
            totals += (price[i].innerText.slice(0,-1)) * 1
        }
        total.innerText = totals.toFixed(2) + '元'
        checkCount = checkItemLength
    }else{
        for(let i = 0;i < checkItemLength;i++){
            checkItem[i].checked = false
            count[i].innerText = '0' 
        }
        totals = 0
        total.innerText = totals.toFixed(2) + '元'
        checkCount = 0
    }
}

goods.onclick = function (evt) {
    var event = evt
    var target = event.target
    var className = target.className
    if(className === 'add'){
        var parent = target.parentNode.parentNode
        var child = parent.children[0].children[0]
        var bro = target.nextElementSibling
        var pr = target.parentNode.previousElementSibling
        var prs = pr.innerText.slice(0,-1) * 1

        if((bro.innerText * 1) === 0 && child.checked === false){
            checkCount++
        }
        if(checkCount === checkItemLength){
            checkAll.checked = true
        }
        bro.innerText = (bro.innerText * 1) + 1
        if((bro.innerText * 1) > 0){
            child.checked = true
        }
        totals += prs
        total.innerText = totals.toFixed(2) + '元'
    }
    if(className === 'reduce'){
        var parent = target.parentNode.parentNode
        var child = parent.children[0].children[0]
        var bro = target.previousElementSibling
        var pr1 = target.parentNode.previousElementSibling
        var prs1 = pr1.innerText.slice(0,-1) * 1
        if((bro.innerText * 1) === 1){
            checkCount--
        }
        if(bro.innerText > 0){
            bro.innerText = (bro.innerText * 1) - 1
            totals -= prs1
        }
        if((bro.innerText * 1) === 0){
            child.checked = false
            checkAll.checked = false
        }
        total.innerText = totals.toFixed(2) + '元'
    }
    if(className === 'checkItem'){
        var parent = target.parentNode.parentNode
        var child = parent.children[3].children[1]
        var prs2 =  parent.children[2].innerText.slice(0,-1) * 1
        if(target.checked){
            checkCount++
            child.innerText = '1'
            totals += prs2
        }else{
            checkCount--
            child.innerText = '0'
            totals -= prs2
        }
        if(checkCount === checkItemLength){
            checkAll.checked = true
        }else {
            checkAll.checked = false
        }
        total.innerText = totals.toFixed(2) + '元'
    }
    if(className === 'delete'){
        var parent = target.parentNode.parentNode.parentNode
        var chi = target.parentNode.parentNode
        var ss = chi.children[0].children[0].checked
        var prs3 = target.parentNode.parentNode.children[2].innerText.slice(0,-1) * 1
        var prs4 = target.parentNode.parentNode.children[3].children[1].innerText * 1
        var he = prs3 * prs4
        var parentls = parent.children.length
        if(ss){
            checkCount--
        }
        checkItemLength --
        if(parentls === 2){
            checkAll.checked = false
            totals = 0
            total.innerText = totals.toFixed(2) + '元'
        }else{
            totals -= he
            total.innerText = totals.toFixed(2) + '元'
        }
        parent.removeChild(chi)
        
    }
}




