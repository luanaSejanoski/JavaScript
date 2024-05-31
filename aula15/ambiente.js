let num = [5, 7, 9, 8, 2]
num.push(3)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(19)
if (pos == -1){
    console.log("Valor não encontrado")
}else{
  console.log(`O valor está na posição ${pos}`)
}
