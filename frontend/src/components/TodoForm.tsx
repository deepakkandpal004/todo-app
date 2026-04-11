import { useState } from "react";
import { createTodo } from "../services/api";

interface AddTodoProps {
  onTodoCreated: () => Promise<void>;
}

const TodoForm = ({ onTodoCreated }: AddTodoProps) => {
  const [title, setTitle] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim()) return;

    await createTodo({ title });

    setTitle("");

    await onTodoCreated();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
      <input
        type="text"
        placeholder="Add a task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="
      flex-1 
      bg-[#0f172a] 
      border border-gray-700 
      rounded-lg 
      px-3 py-2 
      text-white 
      focus:outline-none 
      focus:ring-2 
      focus:ring-blue-500
    "
      />

      <button
        type="submit"
        className="
      bg-blue-500 
      px-4 py-2 
      rounded-lg 
      hover:bg-blue-600 
      transition
      w-full sm:w-auto
    "
      >
        Add
      </button>
    </form>
  );
};

export default TodoForm;
