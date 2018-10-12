// 1. Require your node modules
const mongoose = require('mongoose');

// 2. Require your model (and possibly your extra data source);
const Vampire = require('./models/vampire');
const vampireArray = require('./populateVampires');


// 3. Connect your database and collection name
const connectionRoute = 'mongodb://localhost/test';
mongoose.connect(connectionRoute);


// 4. Open your mongoose connection

mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected to ${connectionRoute}`);
});

mongoose.connection.on('disconnected', () => {
    console.log(`Mongoose is disconnected`);
});

mongoose.connection.on('error', () => {
    console.log(err, 'mongoose error');
});

/////////////////////////////////////////////////
//Write your answers to add, query, update, remove, and Hungry for More below.

// Note: Remember to close your connection after you add, update, remove from your database
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// INSERT USING MONGOOSE
// ### Add the vampire data that we gave you
// Vampire.collection.insertMany(vampireArray,() => {
//     console.log(vampireArray)
//     mongoose.connection.close();
//   });

// ### Add some new vampire data

// Vampire.create(
//     {
//         name: 'Vamp One',
//         hair_color: 'brown',
//         eye_color: 'brown',
//         dob: new Date(1970, 2, 13, 7, 47),
//         loves: ['popcorn','peanuts'],
//         location: 'Miami, Florida, US',
//         gender: 'm',
//         victims: 4,
//     }, 
//     (err, createdVamp) => {
//         if(err){
//             console.log(err);
//         } else {
//             console.log(createdVamp);
//         }
// });

// Vampire.create(
//     {
//         name: 'Vamp Two',
//         hair_color: 'black',
//         eye_color: 'blue',
//         dob: new Date(1969, 2, 15, 7, 47),
//         loves: ['soup','pizza'],
//         location: 'New York, New York, US',
//         gender: 'f',
//         victims: 5,
//     }, 
//     (err, createdVamp) => {
//         if(err){
//             console.log(err);
//         } else {
//             console.log(createdVamp);
//         }
// });

// Vampire.create(
//     {
//         name: 'Vamp Three',
//         hair_color: 'blonde',
//         eye_color: 'brown',
//         dob: new Date(1991, 3, 15, 7, 47),
//         loves: ['basketball','soccer'],
//         location: 'Denver, Colorado, US',
//         gender: 'm',
//         victims: 1,
//     }, 
//     (err, createdVamp) => {
//         if(err){
//             console.log(err);
//         } else {
//             console.log(createdVamp);
//         }
// });

// Vampire.create(
//     {
//         name: 'Vamp Four',
//         hair_color: 'black',
//         eye_color: 'brown',
//         dob: new Date(1990, 3, 10, 7, 47),
//         loves: ['reading','running'],
//         location: 'Denver, Colorado, US',
//         gender: 'f',
//         victims: 1,
//     }, 
//     (err, createdVamp) => {
//         if(err){
//             console.log(err);
//         } else {
//             console.log(createdVamp);
//         }
// });


/////////////////////////////////////////////////
// ## QUERYING
/////////////////////////////////////////////////
// ### Select by comparison

// 1) Find all the vampires that that are females

// Vampire.find({gender: 'f'}, (err, queryDisplay) => {
//     if(err){
//         console.log(err);
//     } else {
//         console.log(queryDisplay);
//     }
// });

// 2) Have greater than 500 victims

// Vampire.find({victims: {$gt: 500}}, (err, queryDisplay) => {
//     if(err){
//         console.log(err);
//     } else {
//         console.log(queryDisplay)
//     }
// });

// 3) Have fewer than or equal to 150 victims

// Vampire.find({victims: {$lte: 150}}, (err, queryDisplay) => {
//     if(err){
//         console.log(err);
//     } else {
//         console.log(queryDisplay)
//     }
// });

// 4) Have a victim count is not equal to 210234

// Vampire.find({victims: {$ne: 210234}}, (err, queryDisplay) => {
//     if(err){
//         console.log(err);
//     } else {
//         console.log(queryDisplay)
//     }
// });

// 5) Have greater than 150 AND fewer than 500 victims

// Vampire.find({$and: [{victims: {$gt: 150}}, {victims: {$lt: 500}}]}, (err, queryDisplay) => {
//     if(err){
//         console.log(err);
//     } else {
//         console.log(queryDisplay)
//     }
// });

/////////////////////////////////////////////////
// ### Select by exists or does not exist

// 1) Have a title property

// Vampire.find({title: {$exists: true}}, (err, queryDisplay) => {
//     if(err){
//         console.log(err);
//     } else {
//         console.log(queryDisplay)
//     }
// });

// 2) Do not have a victims property

// Vampire.find({victims: {$exists: false}}, (err, queryDisplay) => {
//     if(err){
//         console.log(err);
//     } else {
//         console.log(queryDisplay)
//     }
// });

// 3) Have a title AND no victims

// Vampire.find({$and: [{title: {$exists: true}}, {victims: {$exists: false}}]}, (err, queryDisplay) => {
//     if(err){
//         console.log(err);
//     } else {
//         console.log(queryDisplay)
//     }
// });

// 4) Have victims AND the victims they have are greater than 1000

Vampire.find({$and: [{victims: {$exists: true}}, {victims: {$gt: 1000}}]}, (err, queryDisplay) => {
    if(err){
        console.log(err);
    } else {
        console.log(queryDisplay)
    }
});

/////////////////////////////////////////////////
// ### Select with OR

/////////////////////////////////////////////////
//### Select objects that match one of several values

/////////////////////////////////////////////////
//### Negative Selection

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REPLACE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## UPDATE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REMOVE

/////////////////////////////////////////////////
/////////////////////////////////////////////////

// ## HUNGRY FOR MORE
/////////////////////////////////////////////////
//## Select objects that match one of several values

/////////////////////////////////////////////////
//## Negative Selection

/////////////////////////////////////////////////
