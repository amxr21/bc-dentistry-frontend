const Box = ({children, classes}) => {
    return (
        <div className={`div rounded-md p-2 ${classes}`}>{children}</div>
    )
}

export default Box;