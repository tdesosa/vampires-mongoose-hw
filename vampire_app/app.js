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
Vampire.collection.insertMany(vampireArray,() => {
    console.log(vampireArray)
    mongoose.connection.close();
  });

// ### Add some new vampire data

Vampire.create(
    {
        name: 'Vamp One',
        hair_color: 'brown',
        eye_color: 'brown',
        dob: new Date(1970, 2, 13, 7, 47),
        loves: ['popcorn','peanuts'],
        location: 'Miami, Florida, US',
        gender: 'm',
        victims: 4,
    }, 
    (err, createdVamp) => {
        if(err){
            console.log(err);
        } else {
            console.log(createdVamp);
        }
});

Vampire.create(
    {
        name: 'Vamp Two',
        hair_color: 'black',
        eye_color: 'blue',
        dob: new Date(1969, 2, 15, 7, 47),
        loves: ['soup','pizza'],
        location: 'New York, New York, US',
        gender: 'f',
        victims: 5,
    }, 
    (err, createdVamp) => {
        if(err){
            console.log(err);
        } else {
            console.log(createdVamp);
        }
});

Vampire.create(
    {
        name: 'Vamp Three',
        hair_color: 'blonde',
        eye_color: 'brown',
        dob: new Date(1991, 3, 15, 7, 47),
        loves: ['basketball','soccer'],
        location: 'Denver, Colorado, US',
        gender: 'm',
        victims: 1,
    }, 
    (err, createdVamp) => {
        if(err){
            console.log(err);
        } else {
            console.log(createdVamp);
        }
});

Vampire.create(
    {
        name: 'Vamp Four',
        hair_color: 'black',
        eye_color: 'brown',
        dob: new Date(1990, 3, 10, 7, 47),
        loves: ['reading','running'],
        location: 'Denver, Colorado, US',
        gender: 'f',
        victims: 1,
    }, 
    (err, createdVamp) => {
        if(err){
            console.log(err);
        } else {
            console.log(createdVamp);
        }
});


/////////////////////////////////////////////////
// ## QUERYING
/////////////////////////////////////////////////
// ### Select by comparison

/////////////////////////////////////////////////
// ### Select by exists or does not exist

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
