type CounterProps = {
  totalNumberOfTodos : number
  numberOfCompletedTodos : number
}
export default function Counter ( {
  numberOfCompletedTodos,
  totalNumberOfTodos 
} : CounterProps ) {

  return(
      <p>
        <b>
          {numberOfCompletedTodos}
        </b> / {totalNumberOfTodos} {" "}todos completed
      </p>
  )
}