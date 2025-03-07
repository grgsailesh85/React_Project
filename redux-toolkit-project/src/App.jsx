import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import "./app.css"

const App = () => {
  return (
    <>
      <h1 className="bg-white text-black text-[20px] text-center mx-auto p-3 w-fit">
        React-Redux and Redux Toolkit
      </h1>
      <AddTodo />
      <Todos />
    </>
  );
};

export default App;
