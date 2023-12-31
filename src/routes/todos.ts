import { Router } from "express";
import { Todo } from "../models/todo";


type RequestBody ={text: string}
let todos: Todo[] = [];
const router = Router();

router.get("/", (req, res, next) => {
  res.status(200).json({ todos: todos });
});




router.post("/todo", (req, res, next) => {

    const body = req.body as RequestBody
  const newTodo: Todo = {
    id: new Date().toISOString(),
    text: body.text,
  };
  todos.push(newTodo);
  res.status(201).json({ message: "Added todo" });
});






router.put("/todo/:todoId", (req, res, next) => {
  const tid = req.params.todoId;
  const body = req.body as RequestBody
  const todoIndex = todos.findIndex((todoItem) => todoItem.id === tid);

  if (todoIndex >= 0) {
    todos[todoIndex] = { id: tid, text: body.text };
    return res.status(200).json({ message: "updated todo", todos: todos });
  }

  res.status(404).json({ message: "couldnt find" });
});








router.delete("/todo/:todoId", (req, res, next) => {
  todos = todos.filter((todoItem) => todoItem.id !== req.params.todoId);
  res.status(200).json({ message: "deleted todo" });
});





export default router;
