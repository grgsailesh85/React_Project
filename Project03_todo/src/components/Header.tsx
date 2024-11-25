import Counter from "./Counter"
import Logo from "./Logo"

type HeaderProps ={
  totalNumberOfTodos : number
  numberOfCompletedTodos : number
}
export default function Header( { 
  totalNumberOfTodos, 
  numberOfCompletedTodos, 
}:HeaderProps ) {
  return (
    <header className="flex  justify-between items-center px-[28px] col-[1/3] row-[1/2] bg-[#fbf5ed] border-b border-black/[0.08]">
        <Logo />
        
        <Counter 
          totalNumberOfTodos={totalNumberOfTodos}
          numberOfCompletedTodos={numberOfCompletedTodos}
        />
    </header>
  )
}