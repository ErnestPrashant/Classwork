const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://ernestprashant:VNa70rlRt6H5zL9T@cluster0.dtfr1w6.mongodb.net/React_Todo_App"
);

const TodoSchema = new mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const Todo = mongoose.model("todos", TodoSchema);

module.exports = {
    Todo: Todo,
};
