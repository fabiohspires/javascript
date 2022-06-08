function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        alert('Digite um número!')
    }else {
        let n = Number(num.value)
        tab.innerHTML = ''
        for( let c = 1; c <= 10; c++) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}

// ldt c = 1
// while (c <= 10 ) {
//     let item = document.createElement('option')
//     item.text = `${n} x ${c} = ${n*c}`
//     item.value = `tab${c}`
//     tab.appendChild(item)
//     c++
// }