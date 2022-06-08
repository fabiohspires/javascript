function contar() {
    let inicio = document.querySelector('#txti')
    let fim = document.querySelector('#txtf')
    let passo = document.querySelector('#txtp')
    let res = document.querySelector('#res')
    let contando = document.querySelector('.contando')
    
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        alert('[ERRO] Campo vázio')
    }else{
        contando.innerHTML = 'Contando...'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            alert('Passo inválido! Considerando passo 1')
            p = 1
        }
        if (i < f){
            for (let c = i; c <= f; c += p){
                res.innerHTML += ` ${c} \u{1f449}`
            }
            res.innerHTML += `\u{1f3c1}`
        }else {
            for(let c = i; c >= f; c -= p)
            res.innerHTML += `${c} \u{1f449}`
        }
        res.innerHTML += `\u{1f3c1}`
       
    }
}

