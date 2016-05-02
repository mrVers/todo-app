var mongoose = require('mongoose');

exports.init = function(cb){
  
    // run mongod on the system in terminal or command prompt
    // wdd2016 is database name, swap it for something else
    mongoose.connect('mongodb://localhost/wdd2016');
    
    mongoose.connection.on('open', function(){
        
        // connection established
        console.log('Database connected');
        if(cb){
            cb();
        }
        
    });
    
    mongoose.connection.on('err', function(err){
        
        // error when connecting
        console.log(err);
        
    });
    
};