const pessoas = [
    {nome: 'julio', idade: 23},
    {nome: 'diego', idade: 27},
    {nome: 'junior', idade: 25},
    {nome: 'alessandro', idade: 26},

]

isAdult = (pessoa) => pessoa.idade >= 18

console.log(pessoas.every(isAdult));
// Vai da True, um method de array every 
