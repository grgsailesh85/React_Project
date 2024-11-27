type DeleteButtonProps ={
    id: number;
    onDeleteTodo: (id:number) => void;
};
export default function DeleteButton ({id, onDeleteTodo} : DeleteButtonProps) {
    return(
        <button
            onClick = {(e)=>{
                // control event flow in complex DOM structures, ensuring that events trigger only the intended handlers
                e.stopPropagation();
                onDeleteTodo(id);
            }}
        >
            ❌
        </button>
    )
}