var mongoose = require('mongoose');

exports.init = function(app){
      
    app.get('/todos', function(req, res){
        
        var Todo = mongoose.model('Todo');
        
        Todo.find(function(err, docs){
           
            if(!err){
                res.send(docs);
            }else{
                res.sendStatus(400).send(err);
                console.log(err);
            } 
            
            
        });       
        
    });
    
    app.post('/todo', function(req, res){
        
        var todoData = req.body;
        var Todo = mongoose.model('Todo');
        var newTodo = new Todo(todoData);
        
        newTodo.save(function(err){
            
            if(!err){
                res.send(newTodo);
            }else{
                res.sendStatus(400).send(err);
                console.log(err);
            }
            
        });
    });
    
    app.delete('/todo/:id', function(req, res){
        
        var Todo = mongoose.model('Todo');
        
        var todoId = req.params.id;
        console.log(todoId);
        
        Todo.findByIdAndRemove(todoId, function(err, doc){
            
            if(!err){
                res.send(doc);
            }else{
                res.sendStatus(400).send(err);
                console.log(err);
            }
            
        });
        
    });
    
    app.put('/todo/:id', function(req, res){
        
        var Todo = mongoose.model('Todo');

        var todoId = req.params.id;
        var todoData = req.body;
        
        
        Todo.findByIdAndUpdate(todoId, todoData, {new:true}, function(err, doc){
            
            if(!err){
                res.send(doc);
            }else{
                res.sendStatus(400).send(err);
                console.log(err);
            }
        });
        
    });
    
};