import DeleteButton from "./DeleteButton";

const initialTodos = [
    {
        text: "buy groceries",
        isCompleted : false,
    },
    {
        text: "walk the dog",
        isCompleted : true,
    },
    {
        text: "do laundry",
        isCompleted : false,
    },
];

export default function TodoList () {
    return(
        <ul>
            {
                initialTodos.map((todo)=>(
                    <li 
                        key={todo.text} 
                        className="flex justify-between items-center px-8 h-[50px] text-[14px] cursor-pointer border-b border-black/[8%]"
                    >
                        <span 
                            className={`${todo.isCompleted ? "line-through text-[#ccc]" : " "}`}
                        >
                            {todo.text}
                        </span> 
                        <DeleteButton />
                    </li>
                ))
            }
        </ul>
    )
}
