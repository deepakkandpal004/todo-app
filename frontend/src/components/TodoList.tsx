import { useEffect, useState } from "react";
import { deleteTodo, getTodos, toggleTodo } from "../services/api";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import { motion } from "framer-motion";

interface Todo {
  _id: string;
  title: string;
  completed: boolean;
}

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const fetchTodos = async () => {
    const response = await getTodos();
    setTodos(response.data.data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleDelete = async (id: string) => {
    await deleteTodo(id);
    setTodos((prev) => prev.filter((todo) => todo._id !== id));
  };

  const handleToggle = async (todo: Todo) => {
    const updatedCompleted = !todo.completed;
    await toggleTodo(todo._id, updatedCompleted);

    setTodos((prev) =>
      prev.map((t) =>
        t._id === todo._id ? { ...t, completed: updatedCompleted } : t
      )
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#020617] flex items-center justify-center px-3 sm:px-6">
    
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      className="
        w-full 
        max-w-md 
        sm:max-w-lg 
        bg-[#1e293b] 
        rounded-2xl 
        shadow-xl 
        p-4 
        sm:p-6
      "
    >
      <h2 className="text-xl sm:text-2xl font-semibold text-center mb-4 text-white">
        📝 Todo App
      </h2>

      <TodoForm onTodoCreated={fetchTodos} />

      <ul className="mt-4 space-y-2">
        {todos.map((todo) => (
          <TodoItem
            key={todo._id}
            todo={todo}
            onDelete={handleDelete}
            onToggle={handleToggle}
          />
        ))}
      </ul>

      {todos.length === 0 && (
        <p className="text-gray-400 text-center mt-4 text-sm">
          No tasks yet 🚀
        </p>
      )}
    </motion.div>
  </div>
  );
};

export default TodoList;