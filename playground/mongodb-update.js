// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');




MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) => {
  if(err) {
    return console.log('unable to connect to server');
  }
  console.log('succesfully connected to server');

  try {
    db.collection('Users').findOneAndUpdate({
      _id: new ObjectID('5a2a464f712d81e944c66abe')
    },{
      $set: {
        name: 'Joe'
      },
    
      $inc: {
        age: 1
      }
    },
    {
      returnOriginal: false
    }).then((res) => {
      console.log(res);
    });
  } catch (e) {
    console.log(e);
  }

  
})
