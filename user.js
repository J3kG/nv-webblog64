let user = [
{
    "name":"chatnarong",
    "lastname":"raksasat",
    "age":40
},
{
    "name":"Job",
    "lastname":"Rasksasat",
    "age":22
}
]

let userA =
 {
    "name":"AAA",
    "lastname":"AAAA",
    "age":1
 }

let userB =
 {
    "name":"BBB",
    "lastname":"BBBB",
    "age":2
 }

user.push(userA)
user.push(userB)

for (let i = 0; i < user.length; i++){
    console.log('user: ' + user[i].name + ' ' + user[i].age)
}

console.log('----------------------------------')

delete user.splice(2,2)

for (let i = 0; i < user.length; i++){
    console.log('user: ' + user[i].name + ' ' + user[i].age)
}