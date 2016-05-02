var mongoose = require('mongoose');

var Schema = mongoose.Schema({
   
    title: {type:String, required:true},
    date: {type:Date, default:Date.now},
    active: {type:Boolean, default:1}
    
    
});

mongoose.model('Todo', Schema);