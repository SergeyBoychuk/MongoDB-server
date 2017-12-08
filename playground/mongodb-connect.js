const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
  if(err) {
    return console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to mongodb server');

  db.collection('Todos').insertOne({
    text: 'something to do',
    completed: false
  }, (err, result) => {
    if(err) {
      return console.log('Unable to insert todo', err);
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
  })

  db.collection('Users').insertOne({
    name: 'Sergey B',
    age: 21
  }, (err,result) => {
    if(err) {
      return console.log('there was an errro');

    }
    console.log(JSON.stringify(result.ops, undefined, 2));
  })

  db.collection('Car parts').insertOne({
    make: 'Toyota',
    model: 'Camry',
    year: 2010
  }, (err,result) => {
    if(err) {
      return console.log('Theres a problems', err);
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
  })


  db.close();
});

db.collection('Car necesseties').insertOne({
  title: 'Fender',
  year: 2010
}, (err,result) => {
  if(err) {
    return console.log('there was an error', err);
  }
  console.log(JSON.stringify(result.ops, undefined, 2));
  
})
})

