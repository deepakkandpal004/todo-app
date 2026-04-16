import { RequestHandler } from "express";
import { body } from "express-validator";

export const createTodoValidator: RequestHandler[] = [

  body("title")
    .notEmpty()
    .withMessage("Title is required")

    .isString()
    .withMessage("Title must be a string")

    .isLength({ min: 3 })
    .withMessage("Title must be at least 3 characters long")

];