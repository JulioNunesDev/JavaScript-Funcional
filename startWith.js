const frutas = [
    {name: 'maça'},
    {name: 'manga'},
    {name: 'banana'},
    {name: 'goiaba'},
]

const frutasQueComecaComMA = frutas.filter(fruta => fruta.name.startsWith('ma'))

console.log(frutasQueComecaComMA);