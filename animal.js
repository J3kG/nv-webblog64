let animal = [
    {
        "name":"Cat",
        "owner":"Steve",
        "age":3
    }
]

let animalA =
 {
    "name":"Dog",
    "owner":"Jane",
    "age":5
 }

let animalB =
 {
    "name":"Crow",
    "owner":"Yu",
    "age":6
 }

let animalC =
 {
    "name":"Cow",
    "owner":"Holy",
    "age":4
 }

animal.push(animalA)
animal.push(animalB)
animal.push(animalC)

for (let i = 0; i < animal.length; i++){
   console.log('pet: ' + animal[i].name + ' ' + 'Owner: ' + animal[i].owner + ' ' + 'Age: ' + animal[i].age)
}

console.log('-------------------------------')

delete animal.splice(2,1)

for (let i = 0; i < animal.length; i++){
   console.log('pet: ' + animal[i].name + ' ' + 'Owner: ' + animal[i].owner + ' ' + 'Age: ' + animal[i].age)
}