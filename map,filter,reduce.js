const produtos = [
    {id: 1, name: 'banana', valor: 12.5, categoria: 'alimentos'},
    {id: 1, name: 'tomate', valor: 5.5, categoria: 'alimentos'},
    {id: 1, name: 'lápis', valor: 1.00, categoria: 'escolar'},
    {id: 1, name: 'caderno', valor: 15, categoria: 'escolar'},
]

//MAP

const listaNames = produtos.map(p => p.categoria)
console.log(listaNames);

//filter

const listaAlimentos = produtos.filter(p => p.categoria === 'alimentos');
console.log(listaAlimentos);

//Reduce

const numeros = [1,2,3,4,5]
const totalNumeros = numeros.reduce((acc, numero)=> acc + numero);
const totalValor = produtos.reduce((acc, p)=> acc + p.valor, 0);

console.log(totalNumeros);
console.log(totalValor);

// varios methods

const NewProducts = produtos.filter(p => p.categoria === 'alimentos')
.map(x => x.name)


console.log(NewProducts);