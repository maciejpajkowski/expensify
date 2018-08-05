import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// // child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // database.ref('expenses').on('value', (snapshot) => {
// //   const expenses = [];
// //   snapshot.forEach((child) => {
// //     expenses.push({
// //       id: child.key,
// //       ...child.val()
// //     });
// //   });
// //   console.log(expenses);
// // });


// // database.ref('expenses')
// //   .once('value')
// //   .then((snapshot) => {
// //     const expenses = [];

// //     snapshot.forEach((childOfSnapshot) => {
// //       expenses.push({
// //         id: childOfSnapshot.key,
// //         ...childOfSnapshot.val()
// //       });
// //     });

// //     console.log(expenses);
// //   });



// database.ref('expenses').push({
//   description: 'Food',
//   note: 'Was expensive like hell',
//   amount: 12000,
//   createdAt: '12/07/2018'
// });


// // database.ref('notes/-LHw5N66Cw41Fla0kLgt').remove();

// // database.ref('notes').push({
// //   title: 'Course topics',
// //   body: 'React native, Python'
// // });


// // const firebaseNotes = {
// //   notes: {
// //     dagdadhte: {
// //       title: 'First note!',
// //       body: 'This is my first note'
// //     },
// //     nobijwneofndv: {
// //       title: 'Another note!',
// //       body: 'This is my second note'
// //     }
// //   }
// // }

// // const notes = [{
// //   id: '12',
// //   title: 'First note!',
// //   body: 'This is my first note'
// // }, {
// //   id: '53sd',
// //   title: 'Another note!',
// //   body: 'This is my second note'
// // }];

// // database.ref('notes').set(notes);


// // database.ref().on('value', (snapshot) => {
// //   const data = snapshot.val();
// //   console.log(`${data.name} is a ${data.job.title} at ${data.job.company}`);
// // });

// // setTimeout(() => {
// //   database.ref('job/company').set('J.P. Morgan');
// // }, 2000);


// // const onValueChange = database.ref().on('value', (snapshot) => {
// //   console.log(snapshot.val());
// // }, (e) => {
// //   console.log('Error with data fetching: ', e);
// // });

// // setTimeout(() => {
// //   database.ref('age').set(29);
// // }, 3500);

// // setTimeout(() => {
// //   database.ref().off(onValueChange);
// // }, 7000);

// // setTimeout(() => {
// //   database.ref('age').set(28);
// // }, 10500);

// // ONCE fetch method

// // database.ref('location')
// //   .once('value')
// //   .then((snapshot) => {
// //     const val = snapshot.val();
// //     console.log(val);
// //   })
// //   .catch((e) => {
// //     console.log('Error fetching data: ', e)
// // });


// // database.ref().set({
// //   name: 'Matthias Parker',
// //   age: 25,
// //   stressLevel: 6,
// //   job: {
// //     title: 'Software developer',
// //     company: 'Google'
// //   },
// //   location: {
// //     city: 'Warsaw',
// //     country: 'Poland'
// //   }
// // }).then(() => {
// //   console.log('Data is saved.');
// // }).catch((e) => {
// //   console.log('Shit is broken, yo... ', e);
// // });

// // database.ref().set('This is my data.');

// // database.ref('age').set(27);
// // database.ref('location/city').set('Gdańsk');

// // database.ref('attributes').set({
// //   weight: 73,
// //   height: 178
// // }).then(() => {
// //   console.log('New data has been saved!');
// // }).catch((e) => {
// //   console.log('I\'m sorry, Dave, I\'m afraid I cannot let you do that... All I can say is ', e);
// // });

// // Deleting a record from database:
// // database.ref('isSingle')
// //   .remove()
// //   .then(() => {
// //     console.log('Data was removed!');
// //   })
// //   .catch((e) => {
// //     console.log('Data was not removed...', e);
// //   });

//   // database.ref().update({
//   //   stressLevel: 9,
//   //   'job/company': 'Amazon',
//   //   'location/city': 'Sosnowiec'
//   // });