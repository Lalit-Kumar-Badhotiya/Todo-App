const mongoose = require("mongoose");
//mongoose.connect(process.env.DB_URL);
mongoose.connect("mongodb+srv://admin:lalitkumar@cluster0.9eytvkv.mongodb.net/todos");

const todoSchema = new mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean
});

const todo = mongoose.model("todos",todoSchema);

module.exports={
    todo:todo
}