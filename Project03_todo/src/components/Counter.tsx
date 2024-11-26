import { TodosContext } from "../contexts/TodosContextProvider";
import { useContext } from "react";

export default function Counter () {

  const {totalNumberOfTodos, numberOfCompletedTodos} = useContext(TodosContext);

  return(
      <p>
        <b>
          {numberOfCompletedTodos}
        </b> / {totalNumberOfTodos} {" "}todos completed
      </p>
  )
}