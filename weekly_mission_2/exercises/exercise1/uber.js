const profile = {
    name: "Armando Prado",
    email: "asassq@hotmail.com",
    number: "3555447891",
    numberOfTravels: 100,
    stars: 4.9,
    getTotalTravels: function(){
      return this.numberOfTravels
    },
    getGeneralInfo: function(){
      return `Name:  ${this.name} Stars: ${this.stars}`
    }
   }
   
   console.log("Nombre:" + profile.name)
   console.log("Issues totales: " + profile.getTotalTravels())
   console.log(profile.getGeneralInfo())
  
const travel = {
  id: '146664',
  user: 'Armando Prado',
  driver: 'Carlos Perez',
  time: '2:30',
  rating: 5
}

console.log('Travel')
console.log(travel.time)