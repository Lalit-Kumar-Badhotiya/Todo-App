const express = require('express');
const cors = require('cors');
const { createTodo, updateTodo } = require('./types');
const {todo} =require('./db');
const app = express();
app.use(express.json());
app.use(cors());


app.post('/todo',async (req,res) => {
    const userbody = req.body;
    const parsedbody= createTodo.safeParse(userbody);
    if(!parsedbody.success){
        res.status(401).json({
            messgae: "you passed the wrong input"
        })
        return;
    }
    //else put in db
    await todo.create({
        title: parsedbody.data.title,
        description: parsedbody.data.description,
        completed: false
    })
    res.status(201).json({
        message:"Todo created"
    })
    
    
});
app.get('/todos',async (req,res) => {
    const all_todo= await todo.find({});
    res.status(200).json(all_todo);
});

app.put('/completed' ,async (req,res) => {
    const userbody = req.body;
    const parsedbody= updateTodo.safeParse(userbody);
    if(!parsedbody.success){
        res.status(401).json({
            messgae: "you passed the wrong todo id "
        })
        return;
    }
    await todo.updateOne(
        {_id: parsedbody.data.id},
        { $set: { completed: true } }
    )
    res.status(200).json({
            messgae: "todo mark as completed"
        })
    //else mark complete the todo in db
    
});


app.listen(3000);

