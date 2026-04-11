import { motion } from "framer-motion";

interface Todo {
  _id: string;
  title: string;
  completed: boolean;
}

interface TodoItemProps {
  todo: Todo;
  onDelete: (id: string) => void;
  onToggle: (todo: Todo) => void;
}

const TodoItem = ({ todo, onDelete, onToggle }: TodoItemProps) => {
  return (
    <motion.li
      layout
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0 }}
      className="
    flex items-center justify-between 
    bg-[#0f172a] 
    p-3 
    rounded-xl 
    hover:bg-[#1e293b] 
    transition
  "
    >
      <div className="flex items-center gap-3 overflow-hidden">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo)}
          className="accent-blue-500"
        />

        <span
          className={`
        truncate
        ${todo.completed ? "line-through text-gray-500" : "text-gray-200"}
      `}
        >
          {todo.title}
        </span>
      </div>

      <button
        onClick={() => onDelete(todo._id)}
        className="text-red-400 hover:text-red-600 transition text-sm"
      >
        Delete
      </button>
    </motion.li>
  );
};

export default TodoItem;
