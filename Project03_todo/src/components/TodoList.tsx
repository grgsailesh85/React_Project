import DeleteButton from "./DeleteButton";

const initialTodos = [
    "buy groceries",
    "walk the dog",
    "do laundry",
    "study for exam"
];

export default function TodoList () {
    return(
        <ul>
            {
                initialTodos.map((todo)=>(
                    <li 
                        key={todo} 
                        className="flex justify-between items-center px-8 h-[50px] text-[14px] cursor-pointer border-b border-black/[8%]"
                    >
                        <span>{todo}</span>
                        <DeleteButton />
                    </li>
                ))
            }
        </ul>
    )
}
