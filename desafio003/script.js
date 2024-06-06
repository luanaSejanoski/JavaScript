//Declarando variáveis
let num = document.querySelector('input#numero')
let list = document.querySelector('select#lista')
let res = document.querySelector('div#res')

let valores = []


function adicionar() {
    //Verificando se o número é menor que 1 ou maior que 100 ou se o campo está vazio
    if (num.value == "" || num.value < 1 || num.value > 100) {
        window.alert('Valor inválido')
    } else {   //verificando se o número já existe na lista
        let lista = document.createElement('option')
        for (let i = 0; i < valores.length; i++) {
            if (valores[i] == num.value) {
                return alert('Número já encontrado na lista')
            }
        }

        valores.push(num.value) // adicionando o número digitado ao vetor

        lista.text = `Número ${num.value} adicionado`
        list.appendChild(lista)
        res.innerHTML = ''

    }
    num.value = ''; //limpar a caixa de texto
    num.focus() // é como se clicasse com o mouse para o cursor voltar a "piscar"

}


function finalizar() {

//a e b podem ser qualquer valor do vetor. ONDE:
//se retornar um valor negativo, o valor de a virá antes de b;
//se retornar um valor positivo, o valor de b virá antes de a;
// se retornar o valor 0, a ordem de a e b não mudará.

     valores.sort(function (a, b) { // organizando os números em ordem crescente
        return a - b;              
    })

    //OBS: [.lenght -1] retorna o ÚLTIMO valor de um array
    var maior = valores[valores.length - 1] //verificando o maior valor do array

    var total = 0;
    for (let i in valores) { //somando todos os valores do array
        total += Number(valores[i])
    }
    res.innerHTML = `<p>O vetor possui ${valores.length} valores</p>`
    res.innerHTML += `<p>O maior valor é ${maior}</p>`
    res.innerHTML += `<p>O menor valor é ${valores[0]}</p>`
    res.innerHTML += `<p>A soma dos valores é igual a ${total}</p>`
    res.innerHTML += `<p>A média dos valores é ${total/valores.length}</p>`
}




























