const explorers = [
  {
    name: "Explorer 1",
    exercises_completed: 10,
    rate: 99,
    city: "CDMX",
    stack: ["js", "c#"],
    missions: {
      onboarding: {
        isFinished: true,
        exercisesFinished: true,
      },
      frontend: {
        isFinished: true,
        exercisesFinished: true,
      },
    },
  },
  {
    name: "Explorer 2",
    exercises_completed: 9,
    city: "Veracruz",
    rate: 50,
    stack: ["js"],
    missions: {
      onboarding: {
        isFinished: false,
        exercisesFinished: false,
      },
      frontend: {
        isFinished: false,
        exercisesFinished: false,
      },
    },
  },
  {
    name: "Explorer 3",
    exercises_completed: 3,
    city: "Sonora",
    rate: 100,
    stack: ["elixir"],
    missions: {
      onboarding: {
        isFinished: true,
        exercisesFinished: true,
      },
      frontend: {
        isFinished: false,
        exercisesFinished: false,
      },
    },
  },
];

console.log('1.Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH')
explorers.forEach(explorer => {
    console.log(`Nombre: ${explorer.name}`)
    
});
console.log('\n2.Imprime el stack de cada explorer, usa FOR EACH')
explorers.forEach(explorer => {
    console.log(`Stack: ${explorer.stack}`)
})

console.log('\n3.Crea una nueva lista con las listas de stacks de cada explorer, usa MAP')
let lista = explorers.map((explorer) =>{
    return explorer.stack
})

console.log(lista)

console.log('\n4.Obtén la lista de explorers que tengan en su stack "js", usa FILTER (para validar un elemento en un lista se usa el método includes)')
let result = explorers.filter((explorer) => {
    return explorer.stack.includes('js')
})

console.log(result)

console.log('\n5.Busca el primer explorer que sea de la CDMX, usa FIND')
let encontrado = explorers.find(element => element.city == 'CDMX')
console.log(encontrado)

console.log('\n6.Obtén la suma de todos los exercises_completed, usa REDUCE')

console.log(explorers.reduce((acc,actual) => {
    let suma = acc.exercises_completed  + actual.exercises_completed
    return suma
}))

console.log('\n7.Obtén la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true, usa SOME')
//console.log(explorers.some((element) => {element.}))
console.log('\n8.Obtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true. Usa EVERY.')
