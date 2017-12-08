// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');




MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) => {
  if(err) {
    return console.log('unable to connect to server');
  }
  console.log('succesfully connected to server');

  // db.collection('Todos').find({
  //   _id: new ObjectID('5a29a78db7d0132042a65fe9')
  // }).toArray().then((docs) => {
  //   console.log("todos");
  //   console.log(JSON.stringify(docs, undefined , 2))
  // },(err) => {
  //   console.log('unable to fetch todos', err);
  // })

  // db.collection('Todos').find().count().then((count) => {
  //   console.log("todos count:" + count);
    
  // },(err) => {
  //   console.log('unable to fetch todos', err);
  // })
  
  db.collection('Users').find({age: 22}).count().then((count) => {
    console.log(`Total count is ${count}`)
  })
  // db.close();

  
})
