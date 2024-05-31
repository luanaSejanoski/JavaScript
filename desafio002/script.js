
function calcular() {
    let inicio = document.getElementById('ini');
    let final = document.getElementById('fim');
    let passo = document.getElementById('pas');
    let res = document.getElementById('res');


    if (inicio.value.length == 0 || final.value.length == 0 || passo.length == 0) {
        res.innerHTML = 'Impossível contar!'
    } 
    else{
        res.innerHTML = 'Contando...'
        let ini = Number(inicio.value);
        let fim = Number(final.value);
        let pas = Number(passo.value);

        if(pas <= 0){
        window.alert('Passo inválido! Considerando: PASSO = 1')
        pas = 1
    }
    if (ini < fim) {
        res.innerHTML = 'Contando: '
        for (let i = ini; i <= fim; i += pas) {
            res.innerHTML += `${i} \u{1F971}`
        }
    }
    else {
        res.innerHTML = 'Contando: '
        for (let i = ini; i >= fim; i -= pas) {
            res.innerHTML += `${i} \u{1F971}`
        }
    }
    res.innerHTML += ` \u{1F485}`
}
}