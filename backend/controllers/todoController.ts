import Todo from "../models/todoModel";
import asyncHandler from "../utils/asyncHandler";
import { Request, Response } from "express"

export const createTodo = asyncHandler(async (req: Request, res: Response): Promise<void>  => {
  const { title }: { title : string} = req.body;

  if (!title) {
    res.status(400);
    throw new Error("Title is required");
  }
  const todo = await Todo.create({ title });

  res.status(201).json({ success: true, data: todo });
});

export const getTodos = asyncHandler(async (req: Request, res: Response): Promise<void> => {
  const todos = await Todo.find();

  res.status(200).json({
    success: true,
    count: todos.length,
    data: todos,
  });
});

export const getTodoById = asyncHandler(async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params as { id: string };

  const todo = await Todo.findById(id);

  if (!todo) {
    res.status(404);
    throw new Error("Todo not found");
  }
  res.status(200).json({ success: true, data: todo });
});

export const updateTodo = asyncHandler(async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params as { id: string };

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

export const deleteTodo = asyncHandler(async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params as { id: string };

  const todo = await Todo.findByIdAndDelete(id);

  if (!todo) {
    res.status(404);
    throw new Error("Todo not found");
  }

  res.status(200).json({ success: true, message: "todo deleted successfully" });
});
