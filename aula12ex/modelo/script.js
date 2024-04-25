
function carregar() {
    var msg = window.document.getElementById('msg')
    var imagem = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora}horas.`
    if (hora >= 0 && hora < 12) {
        //Bom dia
        imagem.src = '../ex014/manha.jpg'
        document.body.style.background = '#078ccacc'
    }
    else if (hora >= 12 && hora < 18) {
        //Boa tarde
        imagem.src = '../ex014/tarde.jpg'
        document.body.style.background = '#df9432f3'
    }
    else {
        //Boa noite
        imagem.src = '../ex014/noite.jpg'
        document.body.style.background = '#0b1c35'
    }
}