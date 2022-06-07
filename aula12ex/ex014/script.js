function carregar() {
    let msg = document.getElementById('msg')
    let img = document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    hora = 0
    if (hora >= 0 && hora <12) {
        img.src = 'fotomanha.png'
        document.body.style.background = '#f7cf6d'
    }else if (hora >= 12 && hora <18 ) {
        img.src = 'fototarde.png'
        document.body.style.background = '#da7d52'
    }else {
        img.src = 'fotonoite.png'
        document.body.style.background = '#081b1f'
    }
}