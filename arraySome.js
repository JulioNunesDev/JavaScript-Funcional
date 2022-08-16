const pessoas = [
    {nome: 'julio', idade: 23},
    {nome: 'diego', idade: 27},
    {nome: 'junior', idade: 25},
    {nome: 'alessandro', idade: 26},

]

const comecaComJ = (pessoa) => pessoa.nome.startWith('j') 
console.log(pessoas.some(comecaComJ));