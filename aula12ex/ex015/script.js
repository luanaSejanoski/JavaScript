function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('itxtano')
    var res = document.querySelector('div#res')
    if( fano.value.length == 0 ||  Number(fano.value) > ano ) {
        window.alert('Verifique os dados e tente novamente')
    }
else{
    var fsex = window.document.getElementsByName('sex')
    var idade = ano - Number(fano.value)
    var sexo = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if (fsex[0].checked){
        sexo = 'Homem'
        if(idade >= 0 && idade < 10){
        img.setAttribute ('src', 'bebemenino.jpg')
        }
        else if (idade < 21){
            img.setAttribute ('src', 'jovemhomi.jpg')  

        }
        else if(idade  < 50){
            img.setAttribute ('src', 'adulto.jpg')
        }
        else{
            img.setAttribute ('src', 'idoso.jpg')
        }
        
    }
    else if(fsex[1].checked){ 
        sexo = 'Mulher'
        if(idade >= 0 && idade < 10){
            img.setAttribute ('src', 'bebemenina.jpg')
        }
        else if (idade < 21){
            img.setAttribute ('src', 'jovemmenina.jpg')
        }
        else if(idade  < 50){
            img.setAttribute ('src', 'mulher.jpg')
        }
        else{
            img.setAttribute ('src', 'idosa.jpg')
        }
    }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${sexo} com ${idade} anos.`
        res.appendChild(img)
        
    }
  


}
