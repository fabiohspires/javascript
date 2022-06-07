function verificar() {
    let img = document.querySelector('.foto')
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.querySelector('.res')
    if (fano.value.length == 0 || fano.value > ano ) {
        alert('[ERRO] Digite uma data válida!')
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let genero = ''
        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >=0 && idade <12 ) {
                img.src = 'criancah.png'
            }else if (idade < 30){
                img.src = 'jovemh.png'
            } else if (idade < 50) {
                img.src = 'meiah.png'
            } else {
                img.src = 'idosoh.png'
            }
        } else if (fsex[1].checked) {
            genero = 'mulher'
            if (idade >=0 && idade <12) {
            img.src = 'criancam.png'
            }else if (idade < 30) {
            img.src = 'jovemm.png'
            }else if (idade < 50){
                img.src = 'meiam.png'
            }else{
                img.src = 'idosam.png'
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    } 
}