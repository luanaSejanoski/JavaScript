let amigo = {nome: 'Rogério', 
sexo: 'M', 
peso: 70.3,
engordar(p = 0){
console.log('Engordou')
this.peso += p
}}
amigo.engordar(2)

console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)