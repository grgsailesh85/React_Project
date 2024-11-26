type DeleteButtonProps ={
    id: number;
    handleDeleteTodo: (id:number) => void;
};
export default function DeleteButton ({id, handleDeleteTodo} : DeleteButtonProps) {
    return(
        <button
            onClick = {(e)=>{
                // control event flow in complex DOM structures, ensuring that events trigger only the intended handlers
                e.stopPropagation();
                handleDeleteTodo(id);
            }}
        >
            ❌
        </button>
    )
}