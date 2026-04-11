import TodoList from "./components/TodoList.tsx";


function App() {

  return (
    <div>

      <h1 className="flex justify-center py-3 font-bold text-xl text-white bg-gray-800">My Todo App</h1>

      <TodoList />  
      
    </div>
  );

}

export default App;