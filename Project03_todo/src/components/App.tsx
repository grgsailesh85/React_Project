import BackgroundHeading from "./BackgroundHeading"
import Footer from "./Footer"
import Header from "./Header"
import Sidebar from "./Sidebar"
import TodoList from "./TodoList"
// import { useState } from "react"
// import { Todo } from "../lib/types"


const App = () =>{
  // //state
  // // Todo[] TypeScript syntax, specifying that the state will be an array of Todo objects.
  // // declares a state variable todos (an array of Todo objects) and a function setTodos to update it.
  // const [todos, setTodos] = useState<Todo[]>([]);

  // //derived state
  // const totalNumberOfTodos = todos.length
  // // The filter method creates a new array with all elements that pass the test implemented by the provided function. In this case, it filters the todos array, keeping only the items where isCompleted is true.
  // const numberOfCompletedTodos = todos.filter(
  //   (todo) => todo.isCompleted
  // ).length;

  // //event handlers / actions
  // const handleAddTodo = (todoText : string) => {
  //   if(todos.length >= 3){
  //     alert("Log in to add more than 3 todos")
  //     return;
  //   } else {
  //     setTodos(prev =>[
  //         ...prev,
  //         {
  //           id: prev.length + 1,
  //           text: todoText,
  //           isCompleted: false,
  //         },
  //     ]);
  //   }
  // }
  // const handleToggleTodo = (id:number) => {
  //   setTodos(
  //     todos.map((todo) => {
  //       if(todo.id === id) {
  //         return { ...todo, isCompleted : !todo.isCompleted };
  //       }
  //       return todo;
  //     })
  //   )
  // }
  // const handleDeleteTodo = (id:number) => {
  //   setTodos((prev)=>prev.filter((todo)=>todo.id !== id));
  // }


  return (
    <div className="flex justify-center items-center font-sans bg-[#f1d4b3] min-h-screen flex-col">

      <BackgroundHeading />
      
      <main className="relative w-[972px] h-[636px] bg-white rounded-[8px] shadow-[0_4px_4px_rgba(0,0,0,0.08)] grid grid-cols-[7fr_4fr] grid-rows-[59px_1fr] overflow-hidden">
        <Header/>

        <TodoList/>

        <Sidebar/>
      </main>

      <Footer />
    </div>
  )
}
export default App