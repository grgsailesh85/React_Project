import AddTodoForm from "./AddTodoForm";
import Button from "./Button";
import {useKindeAuth} from '@kinde-oss/kinde-auth-react';


export default function Sidebar (){

    const { login, register, logout, isAuthenticated, isLoading, user } = useKindeAuth();
    return(
        <section className="flex flex-col col-[2/3] row-[2/3] bg-[#fffcf9] border-l border-black/[0.08] px-[25px] pt-[18px] pb-[28px]">
            <AddTodoForm/>

            <div className="mt-auto space-y-2">
                {
                    isLoading ? null : isAuthenticated ? (
                        <>
                            <p className="text-sm">Logged in as {user?.email}</p>
                            <Button onClick={logout} buttonType="secondary">
                                Logout
                            </Button>
                        </>
                    ) : (
                        <>
                            <Button onClick={login} buttonType="secondary">Log in</Button>
                            <Button onClick={register} buttonType="secondary">Register</Button>                        
                        </>
                    )
                }

                
            </div>

        </section>
    )
}