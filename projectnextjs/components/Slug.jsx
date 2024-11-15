const Slug = ({title}) =>{
    return (
        <div>
            <h1 className="text-5xl font-bold">{title.split("-").join(" ")}</h1>
        </div>
    ) 
}
export default Slug