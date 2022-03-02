const express = require("express");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");
const app = express();

// middleware
app.use(cors());
app.use(express.json({ extended: false }));

const todos = [
   {
      todo: "Five time prayers",
      id: 1,
   },
   {
      todo: "Exercise in the morning",
      id: 2,
   },
   {
      todo: "Complete Homeworks",
      id: 3,
   },
];

app.get("/todos", (req, res) => {
   res.status(200).json(todos);
});

app.post("/todos", (req, res) => {
   const newTodo = {
      todo: req.body.todo,
      id: uuidv4(),
   };

   todos.push(newTodo);
   res.status(201).json(todos);
});

const PORT = 5001;
app.listen(PORT, () => {
   console.log(`Server running on port: ${PORT}`);
});
