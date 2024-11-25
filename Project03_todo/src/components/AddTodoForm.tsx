import { useState } from "react";
import Button from "./Button";

type AddTodoProps = {
    handleAddTodo: (todoText: string) => void;
}

export default function AddTodoForm ({ handleAddTodo }: AddTodoProps) {

    const [todoText, setTodoText] = useState("")


    return(
        <form 
            action=""
            onSubmit={(e)=>{
                e.preventDefault(); 
                handleAddTodo(todoText);
                setTodoText("");
            }}
        >
            <h2 className="font-medium text-[#231d15]">Add a todo</h2>
            <input 
                type="text" 
                className="h-[45px] border border-black/[12%] rounded-[5px] my-[9px] text-[14px] block w-full px-[16px]"
                value={todoText}
                onChange={(e)=>{
                    setTodoText(e.target.value)
                }}
            />
            <Button >Add to list</Button>
        </form>
    )
}
