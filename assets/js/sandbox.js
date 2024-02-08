const color = 'red'

// --------------------------tab et concaténation----------
//toujours mettre au pluriel les nom de tableau
const colors = ['pink','green',color]

//concaténation
const emphasis1 = 'my car is' +color[1] + 'and it is beautiful'

// -------------------------objet------------------------------

// initialisation de l'objet
const car = {
  color: 'red', // propriété : valeur attachée à un objet
  fuel: 'electric', // propriété : valeur attachée à un objet

// méthode : fonction attachée à un objet
  start() {
    console.log('Vroooom')
  },
}

//appel de méthode start()
car.start()