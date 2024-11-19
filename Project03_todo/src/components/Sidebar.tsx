import AddTodoForm from "./AddTodoForm";
import Button from "./Button";

export default function Sidebar (){
    return(
        <section className="flex flex-col col-[2/3] row-[2/3] bg-[#fffcf9] border-l border-black/[0.08] px-[25px] pt-[18px] pb-[28px]">
            <AddTodoForm />

            <div className="mt-auto space-y-2">
                <Button buttonType="secondary">Log in</Button>
                <Button buttonType="secondary">Register</Button>
            </div>

        </section>
    )
}