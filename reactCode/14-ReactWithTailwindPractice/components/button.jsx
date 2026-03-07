const Button = ({isDone, children}) => {
    return <>
        <button className={`w-88 h-10 ${isDone ? "bg-customblue-100" : "bg-customgray-100"} rounded-lg text-white font-semibold m-10`}>{children}</button>
    </>
}

export default Button;