const numeros = [1,2,3,4,5,6,7,1]

 const newNumeros = new Set()


numeros.forEach((alimento)=>{
    newNumeros.add(alimento)
})
console.log([...newNumeros.values()]);

const frutas = [
    {name: 'banana', categoria: 'fruta'},
    {name: 'alface', categoria: 'legume'},
    {name: 'maça', categoria: 'fruta'},
    {name: 'pimenta', categoria: 'legume'},
]

const alimentosUnicos = new Map()

frutas.forEach((alimento)=>{
if(!alimentosUnicos.has(alimento)){
    alimentosUnicos.set(alimento.categoria, alimento)
}
})

console.log(alimentosUnicos);