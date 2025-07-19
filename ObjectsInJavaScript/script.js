// let person = {
//   name: "Muzamil",
//   age: 25,
//   city: "Karachi",
// };
// console.log(person.name);
// console.log(person["age"]);

// let person2 = {
//   name: "Ali",
//   "person-role": "admin",
//   person_hobbies: ["reading", "gaming", "coding"],
//   age: 30,
// };
// //now here is a point how we access  the person-role ,personhobbies
// console.log(person2.name);
//  //Aap dot notation tabhi use kar sakte ho jab: ✅ Property name: Ek word ho Space na ho Dash (-) na ho Number se start na ho

// console.log(person2["person-role"]); //dot tab fall krti h jab Jab property name Space ho jaise "person hobbies" Special character ho jaise "user-role"


const user = {
    name: "Muzamil",
    age: 25,
    city: "Karachi",
    hobbies: ["reading", "gaming", "coding"],
    address: {
        street: "123 Main St",
        city: "Karachi",
        country: "Pakistan",
    location:{
        latitude: 24.8607,
        longitude: 67.0011
    }

    }}
    // console.log(user.address.location.latitude)
//destructring
//     let { name, age, city, hobbies, address, street, location, latitude, longitude  } = user;
// console.log(user);

// let {latitude,longitude}= user.address.location;
// console.log(latitude,longitude); // This will log the latitude and longitude values from the nested location object

// for (let key in user){
//     console.log(`${key}: ${user[key]}`)
// }

// console.log(Object.keys(user));

//deep copy

let user2 ={...user}; //spreade operator
user2.name = "Ali"; // Modifying the name property in user2
console.log(user2.name); // This will still log "Ali" because user2 is a separate object
console.log(user.name); // This will log "Muzamil" because user is unchanged

user2.address.city = "Lahore"; // Modifying the city property in user2's address
console.log(user2.address.city); // This will log "Lahore"
console.log(user.address.city); // This will log "Karachi" because user is unchanged that the problem  nested value changed if we changed it in user2 that why we use deep copy

let user3 = JSON.parse(JSON.stringify(user2)); // Deep copy using JSON methods

user3.address.city = "Islamabad"; // Modifying the city property in user3's address
console.log(user3.address.city); // This will log "Islamabad"
console.log(user2.address.city); // This will log "Lahore" because user2 is unchanged
console.log(user.address.city); // This will log "Karachi" because user is unchanged
