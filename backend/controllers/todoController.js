import Todo from "../models/todoModel.js";
import asyncHandler from "../utils/asyncHandler.js";

export const createTodo = asyncHandler(async (req, res) => {
  const { title } = req.body;

  const todo = await Todo.create({ title });

  if (!title) {
    res.status(400);
    throw new Error("Title is required");
  }
  res.status(201).json({ success: true, data: todo });
});

export const getTodos = asyncHandler(async (req, res) => {
  const todos = await Todo.find();

  res.status(200).json({
    success: true,
    count: todos.length,
    data: todos,
  });
});

export const getTodoById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const todo = await Todo.findById(id);

  if (!todo) {
    res.status(404);
    throw new Error("Todo not found");
  }
  res.status(200).json({ success: true, data: todo });
});

export const updateTodo = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const updatedTodo = await Todo.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!updatedTodo) {
    res.status(404);
    throw new Error("Todo not found");
  }
  res.status(200).json({ success: true, data: updatedTodo });
});

export const deleteTodo = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const todo = await Todo.findByIdAndDelete(id);

  if (!todo) {
    res.status(404);
    throw new Error("Todo not found");
  }

  res.status(200).json({ success: true, message: "todo deleted successfully" });
});
