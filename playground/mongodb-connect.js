// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = MongoClient = require('mongodb');




MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) => {
  if(err) {
    return console.log('unable to connect to server');
  }
  console.log('succesfully connected to server');

  db.collection('fish caught').insertOne({
    _id: 123,
    species: 'tuna',
    color: 'black'
  },(err,result) => {
    if(err) {
      return console.log('there was an error', err);

    }
    console.log(JSON.stringify(result.ops, undefined, 2));
  })
})
