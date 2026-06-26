const express = require('express');
const { createTodo, updateTodo } = require('./types');
const app = express();
app.use(express.json());


app.post('/todo',(req,res) => {
    const userbody = req.body;
    const parsedbody= createTodo.safeParse(userbody);
    if(!parsedbody.success){
        res.status(401).json({
            messgae: "you passed the wrong input"
        })
        return;
    }
    //else put in db
    
});
app.get('/todos',(req,res) => {
    res.send("hello see ")
});

app.put('/completed' ,(req,res) => {
    const userbody = req.body;
    const parsedbody= updateTodo.safeParse(userbody);
    if(!parsedbody.success){
        res.status(401).json({
            messgae: "you passed the wrong todo id "
        })
        return;
    }
    //else mark complete the todo in db
    
});


app.listen(3000);

