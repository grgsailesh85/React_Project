type DeleteButtonProps ={
    id: number;
    handleDeleteTodo: (id:number) => void;
};
export default function DeleteButton ({id, handleDeleteTodo} : DeleteButtonProps) {
    return(
        <button
            onClick = {(e)=>{
                e.stopPropagation();
                handleDeleteTodo(id);
            }}
        >
            ❌
        </button>
    )
}