import express, { Router } from 'express'
import { createTodo, deleteTodo, getTodoById, getTodos, updateTodo } from '../controllers/todoController.ts'
import { createTodoValidator } from "../validators/todoValidator.ts"
import validateMiddleware from '../middlewares/validateMiddleware.ts';


const router: Router = express.Router();

router.post("/", createTodoValidator, validateMiddleware, createTodo);
router.get('/', getTodos);
router.get('/:id', getTodoById);
router.put('/:id', updateTodo);
router.delete('/:id', deleteTodo)

export default router;
