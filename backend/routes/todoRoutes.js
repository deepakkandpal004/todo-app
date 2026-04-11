import express from 'express'
import { createTodo, deleteTodo, getTodoById, getTodos, updateTodo } from '../controllers/todoController.js'
import { createTodoValidator } from "../validators/todoValidator.js"
import validateMiddleware from '../middlewares/validateMiddleware.js';


const router = express.Router();

router.post("/", createTodoValidator, validateMiddleware, createTodo);
router.get('/', getTodos);
router.get('/:id', getTodoById);
router.put('/:id', updateTodo);
router.delete('/:id', deleteTodo)

export default router;
