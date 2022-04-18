const users = [
    {
        name: 'Luis Armando Prado',
        email: 'assdd@hotmail.com',
        cellPhoneNumber: '44563123547',
        password: '123contraseña',
        photos: ['photo1', 'photo2'],
        publications: 70,
    },
    {
        name: 'Julio mendes',
        email: 'Julio@hotmail.com',
        cellPhoneNumber: '1234567894',
        password: 'sdsdsdd',
        photos: ['photo1', 'photo2', 'photo3'],
        publications: 50,
    }
]


console.log('1.Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH')
users.forEach(user => {
    console.log(`Nombre: ${user.name}`)
    
});
console.log('\n2.Imprime el stack de cada explorer, usa FOR EACH')
users.forEach(user => {
    console.log(`Photo: ${user.photos}`)
})

console.log('\n3.Crea una nueva lista con las listas de stacks de cada explorer, usa MAP')
let lista = users.map((user) =>{
    return user.photos
})

console.log(lista)

console.log('\n4.Obtén la lista de explorers que tengan en su stack "js", usa FILTER (para validar un elemento en un lista se usa el método includes)')
let result = users.filter((user) => {
    return user.photos.includes('photo3')
})

console.log(result)

console.log('\n5.Busca el primer explorer que sea de la CDMX, usa FIND')
let encontrado = users.find(element => element.password == '123contraseña')
console.log(encontrado)

console.log('\n6.Obtén la suma de todos los exercises_completed, usa REDUCE')

console.log(users.reduce((acc,actual) => {
    let suma = acc.publications  + actual.publications
    return suma
}))
