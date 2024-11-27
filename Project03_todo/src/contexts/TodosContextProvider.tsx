import React, { createContext, useState } from "react";
import { Todo } from "../lib/types";

type TodosContextProviderProps = {
    children: React.ReactNode;
};

type TTodosContext = {
  todos: Todo[];
  totalNumberOfTodos: number;
  numberOfCompletedTodos: number;
  handleAddTodo:(todoText: string) => void;
  handleToggleTodo: (id: number) => void;
  handleDeleteTodo: (id: number) => void
}

export const TodosContext = createContext<TTodosContext | null> (null)

export default function TodosContextProvider ({children}: TodosContextProviderProps) {
    
  //state
  // Todo[] TypeScript syntax, specifying that the state will be an array of Todo objects.
  // declares a state variable todos (an array of Todo objects) and a function setTodos to update it.
  const [todos, setTodos] = useState<Todo[]>([]);

  //derived state
  const totalNumberOfTodos = todos.length
  // The filter method creates a new array with all elements that pass the test implemented by the provided function. In this case, it filters the todos array, keeping only the items where isCompleted is true.
  const numberOfCompletedTodos = todos.filter(
    (todo) => todo.isCompleted
  ).length;

  //event handlers / actions
  const handleAddTodo = (todoText : string) => {
    if(todos.length >= 3){
      alert("Log in to add more than 3 todos")
      return;
    } else {
      setTodos(prev =>[
          ...prev,
          {
            id: prev.length + 1,
            text: todoText,
            isCompleted: false,
          },
      ]);
    }
  }
  const handleToggleTodo = (id:number) => {
    setTodos(
      todos.map((todo) => {
        if(todo.id === id) {
          return { ...todo, isCompleted : !todo.isCompleted };
        }
        return todo;
      })
    )
  }
  const handleDeleteTodo = (id:number) => {
    setTodos((prev)=>prev.filter((todo)=>todo.id !== id));
  }
 

  //side effects fetch data from api
  // useEffect(()=>{
  //   const fetchTodos = async () => {
  //     const response = await fetch('https://bytegrad.com/course-assets/api/todos');
  //     const todos = await response.json();
  //     setTodos(todos)
  //   }
  //   fetchTodos();
  // }, []);
    
    return(
        <TodosContext.Provider
            value={{
                todos,
                totalNumberOfTodos,
                numberOfCompletedTodos,
                handleAddTodo,
                handleToggleTodo,
                handleDeleteTodo,
            }}
        >
            {children}
        </TodosContext.Provider>
    )
}