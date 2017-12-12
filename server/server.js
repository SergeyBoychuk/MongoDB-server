var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean
  },
  completedAt: {
    type: Number
  }
});

// var newTodo = new Todo({
//   text: 'Cook Dinner'
// })

// var newerTodo = new Todo({
//   text: 'World',
//   completed: true,
//   completedAt: 1230
// })

// newerTodo.save().then((doc) => {
//   console.log('Saved' , doc)
// },(e) =>{
//   console.log('there was an error');
// })

// newTodo.save().then((doc) => {
//   console.log('Saved todo', doc)
// },(e) =>{ 
//   console.log('Unable to save todo', e);
// })

var otherTodo = new Todo({
  
});

otherTodo.save().then((doc) => {
  console.log(JSON.stringify(doc, undefined , 2));
}, (e) => {
  console.log('unable to save ' , e)
})