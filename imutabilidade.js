const casa1 = {
    cor: 'amarelo',
    rua: 'AV. Brasil',
    numero: 1
}
const casa2 = {...casa1, numero : 30};

console.log(casa1);
console.log(casa2);

const lista1 = ['laranja', 'banana']
const lista2 = [...lista1, 'maça']

console.log(lista1);
console.log(lista2);

const jose = {
    name: 'jose',
    idade: 18,
    enderecos: [
        {
            rua: 'AV. Brasil',
            numero: 10
        }
    ]

}

const joao = { 
    ...jose,
    name: 'joao',
    enderecos: [...jose.enderecos,{
        rua: 'AV. Fenix',
        numero: 10,
    },]
}


console.log(jose);
console.log(joao);


