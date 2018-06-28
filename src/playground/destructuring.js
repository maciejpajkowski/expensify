
// OBJECT DESTRUCTURING

// const person = {
//     name: 'Maciej',
//     age: 24,
//     location: {
//         city: 'Warsaw',
//         temp: -10
//     }
// }

// const { name: firstName, age } = person;
// // const firstName = person.name;
// // const age = person.age;

// console.log(`${firstName} is ${age}`);

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
//     title: 'Metro 2033',
//     author: 'Dmitry Glukhovsky',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const  { name: publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName);

//
// ARRAY DESTRUCTURING
//

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylania', '19147'];
const [, city, state = 'New York'] = address;
console.log(`You are in ${city}, ${state}.`);

const item = ['Coffee (hot)', '$2,00', '$2,50', '$2,75'];
const [coffee, , mediumCost] = item;
console.log(`A medium ${coffee} costs ${mediumCost}`);
