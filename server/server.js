var express     = require('express');
var bodyParser  = require('body-parser');
var cors        = require('cors');
var router      = require('./router');
var database    = require('./database');
var app         = express();

exports.init = function(){
    
    database.init(function(){
        
        require('./models/todo');
        
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({extended:true}));
        app.use(cors());

        
        router.init(app);
        

    
        app.listen(3000, function(){

            console.log('Server listening on port 3000');

        });
        
    });
    
};