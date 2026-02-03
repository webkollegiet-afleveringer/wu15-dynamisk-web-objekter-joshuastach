// let person ={
//     firstname: "Bro",
//     lastname: "Zo",
//     age: 19,
//     hometown: "BrobroTown",
//     pet: "Glings",
//     petname: "Gløggert"
// }

// let person1 = {};
// person1["firstName"] = "Zozo";
// person1["lastName"] = "Brobro";

// console.log(person1.firstName)



// console.log(person.firstname);
// console.log(person.lastname);
// console.log(person.pet);
// console.log(person.hometown);


let person ={
    firstname: "Bro",
    lastname: "Zo",
    single: true,
    age: 19,
    hobbies: ["Art", "2D Artist/2D Animator", "3D Designer", "Musican"],
    hometown: "BrobroTown",
    pet:{
        type: "Beanie",
        name: "Robert Nymand"
    },
}

person.hobbies.forEach(function(hobby) {
    console.log(hobby);
       
})
console.log(person.pet.type);
console.log(person.pet.name);

console.log(person);
