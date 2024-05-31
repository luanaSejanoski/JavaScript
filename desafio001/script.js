
function calcular() {
    let numero = document.getElementById('num');
    let tabuada = document.getElementById('restab');

    if (numero.value.length == 0) {
        window.alert('Por favor digite um número!')
    } else {
        let num = Number(numero.value)
        tabuada.innerHTML = ''
        for (var i = 0; i <= 10; i++) {
            var resultado = num * i
            var lista = document.createElement('option')
            lista.text =`${num} x ${i} = ${resultado}`
            tabuada.appendChild(lista)
    
        }
    }


   
}