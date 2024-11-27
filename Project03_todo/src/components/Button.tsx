type ButtonProps = {
    onClick: () =>Promise<void>
    buttonType ?: "primary" | "secondary";
    children: React.ReactNode;
}

export default function Button ( { onClick, buttonType, children }:ButtonProps ) {
    return(
        <button
            onClick = {onClick}
            className={`h-[45px] bg-[#473a2b] w-full text-white rounded-[5px] cursor-pointer hover:bg-[#322618] 
                ${buttonType === 'secondary' ? 'opacity-[85%]':''}`
            }
        >
            { children }
        </button>
    )
}